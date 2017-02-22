const databaseName = process.env.NODE_ENV === 'maya-monroe'
const pgp = require('pg-promise')();
const CONNECTION_STRING = process.env.NODE_ENV === 'production'
  ? process.env.DATABASE_URL
  : `postgres://${process.env.USER}@localhost:5432/maya-monroe`
// const CONNECTION_STRING = `postgres://${process.env.USER}@localhost:5432/hackathon`
const db = pgp(CONNECTION_STRING);
const pg = require('pg');

const createContact = (name, email, phone, dates, meetupTime) => {
  const sql =  `
    INSERT INTO
      contacts (name, email, phone, dates, meetupTime)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      *
    `
  return db.any(sql, [name, email, phone, dates, meetupTime])
}

const associateOptionWithContact = (contact, option) => {
  const queries = options.map(optionId => {
    const sql = `
      INSERT INTO
        contact_options(contact_id, option_id)
      VALUES
        ($1, $2)
    `
    return db.any(sql, [contact.id, optionId])
  })
  return Promise.all(queries)
}

const getAllOptions = () => {
  const sql = `SELECT * FROM options`

  return db.any(sql, [])
}

module.exports = {
  createContact: createContact,
  associateOptionWithContact: associateOptionWithContact,
  getAllOptions: getAllOptions
 }