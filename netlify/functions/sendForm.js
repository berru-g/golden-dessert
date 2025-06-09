// netlify/functions/sendForm.js
import { config } from 'dotenv';
import { Client } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

config(); // charge .env

export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response('Méthode non autorisée', { status: 405 });
  }

  const { nom, email, siteweb, statut, message } = await req.json();

  // Stockage dans Neon
  const client = new Client({ connectionString: process.env.NEON_DB_URL });
  await client.connect();
  await client.sql`
    INSERT INTO contacts (nom, email, siteweb, statut, message)
    VALUES (${nom}, ${email}, ${siteweb}, ${statut}, ${message});
  `;
  await client.end();

  // Envoi email
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // ou smtp.sendgrid.net
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Formulaire site" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_DEST,
    subject: "Nouveau message du site",
    text: `Nom: ${nom}\nEmail: ${email}\nSite: ${siteweb}\nStatut: ${statut}\nMessage: ${message}`,
  });

  return new Response('OK', { status: 200 });
};
