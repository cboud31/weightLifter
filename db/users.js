// Database Adapters for users routes
const { client } = require('./index');
const bcrypt = require('bcrypt');

// getUserByUsername [x], getUserByEmail [x], getUserByID[], createUser [x]

async function createUser({ firstName, lastName, email, username, password }) {
  try {
    //   Password hashing
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const { rows: user } = await client.query(
      `
    INSERT INTO users("firstName", "lastName", email, username, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
      [firstName, lastName, email, username, bcryptPassword]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const { rows: user } = await client.query(
      `
        SELECT * FROM users
        WHERE username=$1
        `,
      [username]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const { rows: user } = await client.query(
      `
      SELECT * FROM users
      WHERE email=$1
      `,
      [email]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByID(userID) {
  try {
    const { rows: user } = await client.query(
      `
      SELECT * FROM users
      WHERE "userID"=$1
      `,
      [userID]
    );
    delete user.password;

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUserByUsername,
  getUserByEmail,
  getUserByID,
};
