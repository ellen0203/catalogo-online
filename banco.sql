
CREATE TABLE usuario (
  id            SERIAL PRIMARY KEY,
  nome  varchar(60) NOT NULL,
  email         varchar(255) NOT NULL UNIQUE,
  senha     varchar(255) NOT NULL,
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()
);

