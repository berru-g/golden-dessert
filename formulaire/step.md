SQL pour créer la table dans Supabase

Tu peux aller dans l’onglet "SQL Editor" sur supabase.com, et coller ceci :

create table contacts (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  fullname text not null,
  statut text not null,
  telephone text,
  siteweb text,
  message text not null,
  created_at timestamp with time zone default now()
);


Ensuite va dans l’onglet "Auth → Policies" :

    Clique sur contacts

    Crée une Row Level Security policy :

-- Permet à tout le monde d'insérer
CREATE POLICY "Allow insert to all" ON contacts
FOR INSERT
TO public
USING (true);


Et active RLS pour cette table (bouton Enable RLS).
🔁 Étapes à suivre dans Make

    Créer un nouveau scenario

    Premier module : Supabase → Watch rows

        Connecte ton compte Supabase (url + anon key)

        Table = contacts

        Trigger = on new row

    Deuxième module : Email > Send email

        Ton adresse fixe dans To

        Corps du message = données venant de Supabase

Exemple de contenu d’email :

📧 Email : {{email}}
👤 Nom complet : {{fullname}}
📌 Statut : {{statut}}
✉️ Message :
{{message}}

🕒 Reçu le : {{created_at}}

    Active le scénario (ON)

    Teste un envoi via le formulaire 🧪

🧼 Résumé
Étape	Ce que tu fais
1	Crée la table contacts dans Supabase
2	Active RLS et autorise les insertions publiques
3	Intègre le formulaire HTML/JS/CSS dans ta page
4	Crée ton scénario Make qui regarde la table
5	Connecte un module d’email
6	Teste le formulaire → email automatique 🎯

📌 Astuces

    Tu peux ajouter un champ téléphone, site web, etc. facilement

    Tu peux filtrer les mails dans Make pour qu’ils soient redirigés selon le statut

    Tu peux afficher un loader animé avant le SweetAlert si tu veux un petit plus UX

🆓 Coût : 0€

    Supabase (plan gratuit) : stockage illimité, jusqu'à 500 000 requêtes/mois

    Make (plan gratuit) : 1000 opérations/mois

    Aucune carte bancaire nécessaire