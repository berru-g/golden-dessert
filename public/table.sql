CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  nom TEXT,
  email TEXT,
  siteweb TEXT,
  statut TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
