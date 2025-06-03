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

-- plus sql de renvoie des données de supabase à make pour un renvoie sur mon mail;

-- 1. Fonction pour envoyer un POST vers Make
create or replace function notify_make_on_insert()
returns trigger
language plpgsql
as $$
declare
  response json;
begin
  -- Appelle ton webhook Make ici :
  select
    http.post(
      'https://hook.us1.make.com/XXXXX/XXXXX', -- remplace par ton URL Make
      'application/json',
      json_build_object(
        'email', NEW.email,
        'fullname', NEW.fullname,
        'statut', NEW.statut,
        'telephone', NEW.telephone,
        'siteweb', NEW.siteweb,
        'message', NEW.message,
        'created_at', NEW.created_at
      )::json
    ) into response;

  return new;
end;
$$;

-- 2. Création du trigger sur INSERT
drop trigger if exists contact_make_trigger on contacts;

create trigger contact_make_trigger
after insert on contacts
for each row
execute function notify_make_on_insert();


-- https://berru-g.github.io/golden-dessert/