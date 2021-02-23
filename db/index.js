const pg = require('pg');

const client = new pg.Client('postgres://localhost:5432/weightLifter');

// client.connect();

async function getAllExercises() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM exercises;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getExerciseByID(exerciseID) {
  try {
    const {
      rows: [result],
    } = await client.query(`
    SELECT * FROM exercises
    WHERE "exerciseID" = ${exerciseID}
    `);
    return result;
  } catch (error) {
    throw error;
  }
}

async function createExercise({ title, description, videoURL }) {
  try {
    const {
      rows: [exercise],
    } = await client.query(
      `
      INSERT INTO exercises(title, description, "videoURL")
      VALUES($1, $2, $3)
      RETURNING *;
      `,
      [title, description, videoURL]
    );

    return exercise;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getAllExercises,
  getExerciseByID,
  createExercise,
};
