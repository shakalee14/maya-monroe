DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  dateOne VARCHAR(255),
  dateTwo VARCHAR(255),
  dateThree VARCHAR(255),
  options INTEGER NOT NULL,
  message VARCHAR(255)
);

DROP TABLE IF EXISTS options;

CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  option VARCHAR(255)
);

DROP TABLE IF EXISTS contact_option;

CREATE TABLE contact_option (
  contact_id INTEGER NOT NULL,
  option_id INTEGER NOT NULL
);
