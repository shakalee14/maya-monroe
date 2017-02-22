DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone INTEGER,
  dates VARCHAR(255),
  meetupTime VARCHAR(255),
);

DROP TABLE IF EXISTS options;

CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  option VARCHAR(255)
);

CREATE TABLE contact_option (
  contact_id INTEGER NOT NULL,
  genre_id INTEGER NOT NULL
);
