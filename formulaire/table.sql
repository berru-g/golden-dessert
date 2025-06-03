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
