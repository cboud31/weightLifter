const exercisesRouter = require('express').Router();
const { createExercise } = require('../db/exercises');

//@route    GET /api/exercises/
//@descr    Get all routines in the database.
//@access   Public
exercisesRouter.get('/', async (req, res, next) => {
  res.send({
    success: 'true',
    message: 'This route gets all exercises from the database.',
  });
});

//@route    GET /api/exercises/:exerciseID
//@descr    Get an individual exercise.
//@access   Public
exercisesRouter.get('/:exerciseID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route gets an exercise with ID of ${req.params.exerciseID}.`,
  });
});

//@route    GET /api/exercises/:userID
//@descr    Get all exercises created by a user.
//@access   Private
exercisesRouter.get('/:userID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route gets all exercises created by user with ID ${req.params.exerciseID}.`,
  });
});

//@route    POST /api/exercises/
//@descr    Create a new exercise.
//@access   Private
exercisesRouter.post('/', async (req, res, next) => {
  res.send({
    success: 'true',
    message: 'This route gets all exercises from the database.',
  });
});

//@route    PATCH /api/exercises/:exerciseID
//@descr    Update an individual exercise.
//@access   Private
exercisesRouter.patch('/:exerciseID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route updates exercise with routine of  ${req.params.exerciseID}.`,
  });
});

//@route    DELETE /api/exercises/:exerciseID
//@descr    Delete an individual exercise.
//@access   Private
exercisesRouter.delete('/:exerciseID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route deletes the exercise with ID of ${req.params.exerciseID}.`,
  });
});

module.exports = exercisesRouter;
