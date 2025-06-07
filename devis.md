
#### Option 1

| **Critère**                 | **Formspree + Netlify** *(solution simplifiée)* | **PHP + O2Switch** *(solution complète)*                 |
| --------------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| 💸 **Coût mensuel**         | **0 €** (Netlify gratuit + Formspree Free)\*    | **5 € TTC** (tout compris chez O2Switch)                 |
| 🛒 **Nom de domaine**       | Environ 8–12 €/an chez OVH, Gandi, etc.         | Inclus dans l’offre O2Switch                             |
| 🔧 **Hébergement**          | Netlify (gratuit pour sites statiques)          | O2Switch avec PHP, MySQL, SSL, etc.                      |
| 📬 **Formulaire**           | Basé sur Formspree (JS + HTML, no-code)         | Full contrôle avec `submit.php`                          |
| 🗃️ **Base de données**     | ❌ Pas de stockage (sauf via Zapier, Airtable)   | ✅ MySQL (stockage local complet)                         |
| 📈 **Évolutivité**          | Limitée (idéal landing page ou vitrine simple)  | Illimitée (admin, dashboard, blog...)                    |
| 🔐 **Sécurité et gestion**  | Très peu de contrôle côté serveur               | Plein contrôle (validation, anti-spam, captcha, logs...) |
| ✉️ **Email automatique**    | ✅ Possible via Formspree (jusqu’à 50/mois)      | ✅ Avec `mail()` ou SMTP personnalisé                     |
| 🛠️ **Personnalisation**    | Faible (pas de logique back-end)                | Très poussée (conditions, fichiers, etc.)                |
| 📂 **Accès FTP & fichiers** | ❌ Pas possible sur Netlify / Formspree          | ✅ FTP complet sur O2Switch                               |



#### Option 2 (full)

| **Critère**                        | **Netlify + Formspree** *(Landing simple)*  | **O2Switch + PHP/MySQL** *(Site complet personnalisé)* | **Odoo (SaaS ou auto-hébergé)** *(ERP + CRM + site)* |
| ---------------------------------- | ------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| 💰 **Coût hébergement/mois**       | 0 € (Netlify Free) + 0 € (Formspree Free\*) | 5 € TTC (O2Switch tout inclus)                         | à partir de **25 €/mois** pour CRM, site, etc.       |
| 🌐 **Nom de domaine**              | 8–12 €/an (à acheter à part)                | Inclus chez O2Switch                                   | Inclus si auto-hébergé, à acheter sinon              |
| 📤 **Formulaire complet**          | ✅ (via JS + redirection)                    | ✅ (back-end en PHP + BDD + redirection)                | ✅ (formulaires dynamiques intégrés)                  |
| 📬 **Emails automatiques**         | ✅ (limité à 50 avec branding)               | ✅ (full contrôle, SMTP, pièce jointe)                  | ✅ (automatisés via Workflows ou CRM)                 |
| 📊 **Stockage de leads**           | ❌ (ou via Zapier tiers, Airtable)           | ✅ dans ta base SQL personnelle                         | ✅ dans CRM natif Odoo                                |
| ⚙️ **Base de données**             | ❌                                           | ✅ (MySQL)                                              | ✅ PostgreSQL (Odoo)                                  |
| 📈 **Scalabilité**                 | ⚠️ limitée                                  | ✅ (possible d’ajouter un CMS, dashboard...)            | ✅ ultra scalable (stock, ventes, compta, etc.)       |
| 🧾 **Facturation**                 | ❌                                           | ⚠️ sur-mesure à développer                             | ✅ natif (devis, factures, signature en ligne)        |
| 📦 **Gestion des stocks**          | ❌                                           | ❌ à coder manuellement                                 | ✅ natif (stock, livraison, QR code, alertes)         |
| 🧠 **CRM intégré**                 | ❌                                           | ❌                                                      | ✅ avec pipeline, opportunités, rappels, etc.         |
| 🔧 **Maintenance technique**       | Très faible                                 | Moyenne (FTP, SQL, updates manuels)                    | Faible si cloud, haute si auto-hébergé               |
| 🧑‍💻 **Développement sur mesure** | Faible (HTML/JS)                            | Moyen/élevé (site + sécurité + traitement PHP)         | Élevé pour intégration personnalisée                 |
| 💼 **Image pro / crédibilité**     | Moyenne                                     | Bonne (site propre, formulaire intégré)                | Très haute (solution complète tout-en-un)            |
| 💸 **Coût de dev (forfait)**       | 500 €                                       | 500 €                                                  | 500 € + configuration supplémentaire éventuelle      |

#### Devis final


| Option                           | Hébergement + nom de domaine | Dév. (mtn)     | **Total Année 1** |
| -------------------------------- | ---------------------------- | -------------- | ----------------- |
| **Netlify + Formspree (Free)**   | ≈ 10 €                       | 500 €          | **≈ 510 €**       |
| **O2Switch (site PHP complet)**  | 5 € × 12 + domaine inclus    | 500 €          | **≈ 560 €**       |
| **Odoo SaaS (officiel)**         | 25 € × 12 + domaine ≈ 10 €   | 500 €          | **≈ 810 €**       |
| **Odoo auto-hébergé (O2Switch)** | 5 € × 12 (serveur mutualisé) | 500 € + config | **≈ 650–800 €**   |


### Devis client

| **Option**                                                    | **Ce que vous obtenez**                                                                                                             | **Fonctionnalités**                                                                                                                                       | **Coût total estimé (1ère année)** |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **Option 1 — Formulaire simple**  *(via Netlify + Formspree)* | Un site vitrine avec un formulaire de contact basique. Les messages sont envoyés directement par email sans stockage.               | - Réception directe des demandes par mail<br>- Page simple, rapide à charger<br>- Idéal pour un premier contact                                           | **≈ 510 €**                        |
| **Option 2 — Site complet**  *(via O2Switch)*                 | Un site complet avec un vrai formulaire. Les messages sont enregistrés dans une base de données pour un suivi plus professionnel.   | - Enregistrement des contacts<br>- Emails personnalisés<br>- Redirection automatique<br>- Possibilité d’évolution (ex: espace client, catalogue protégé…) | **≈ 560 €**                        |
| **Option 3 — Solution pro complète** *(via Odoo)*             | Un site + outil de gestion tout-en-un : formulaire, base de contacts, facturation, gestion de stock, tableau de suivi client (CRM). | - Site + formulaire intégré<br>- Fichier client centralisé<br>- Envoi de devis/factures<br>- Suivi commercial<br>- Gestion de stock si besoin             | **≈ 810 €**                        |

🧠 Recommandations

    🔹 Si vous voulez juste un site élégant avec formulaire de contact : Option 1 est parfaite pour démarrer.

    🔸 Si vous voulez une base de données de clients, préparer l’avenir, ou ajouter des fonctions plus poussées : choisissez l’Option 2.

    🔥 Si vous voulez une vraie solution pro (CRM, devis, stock, catalogue, relance client) : Option 3 avec Odoo est la plus complète.

💬 Tous les prix incluent mon travail de développement, design, configuration et accompagnement.