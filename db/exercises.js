// Bring in the DB connection.
const { client } = require('./db');

// Database adapters for exercises
// createExercise, getAllExercises, getExerciseByID

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
  createExercise,
};
