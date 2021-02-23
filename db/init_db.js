// This where we'll build the tables and populate initial data

// Import DB client & adapters here
const { client } = require('./index');

// Declare functions to drop and build tables
async function dropTables() {
  try {
    await client.query(`
    DROP TABLE IF EXISTS exercises;
    DROP TABLE IF EXISTS users;
    `);

    console.log(`Finished dropping tables!`);
  } catch (error) {
    console.error(`Error dropping tables!`);
    throw error;
  }
}

async function buildTables() {
  try {
    await client.query(`
    CREATE TABLE users(
      "userID" uuid DEFAULT uuid_generate_v4 () UNIQUE,
      "firstName" VARCHAR(255) NOT NULL,
      "lastName" VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      "registerDate" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      "imageURL" VARCHAR(255) DEFAULT NULL,
      "isAdmin" BOOLEAN NOT NULL DEFAULT false
    );

    CREATE TABLE exercises(
      "exerciseID" SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      "videoURL" VARCHAR(255) DEFAULT NULL,
      author VARCHAR(255) REFERENCES users(username),
      author_id uuid REFERENCES users("userID")
    );

    CREATE TABLE routines(
      "routineID" SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      author VARCHAR(255) REFERENCES users(username),
      author_id uuid REFERENCES users("userID")
    );
    `);
    console.log(`Finished building tables!`);
  } catch (error) {
    console.error(`Error building tables!`);
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log('Dropping tables..');
    await dropTables();
    console.log('Re-building tables..');
    await buildTables();
  } catch (error) {
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
