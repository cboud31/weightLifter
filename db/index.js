const pg = require('pg');

const client = new pg.Client('postgres://localhost:5432/weightLifter');

// client.connect();

async function createExercise({ title, description, videoURL }) {
  try {
    const result = await client.query(
      `
      INSERT INTO exercises(title, description, "videoURL")
      VALUES($1, $2, $3)
      RETURNING *;
      `,
      [title, description, videoURL]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  createExercise,
};
