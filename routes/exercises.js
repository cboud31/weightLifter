const exercisesRouter = require('express').Router();
const {
  getAllExercises,
  getExerciseByID,
  createExercise,
} = require('../db/index');

//@route    GET /api/exercises/
//@descr    Get all routines in the database.
//@access   Public
exercisesRouter.get('/', async (req, res, next) => {
  try {
    const exercises = await getAllExercises();
    res.send({
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    next(error);
  }
});

//@route    GET /api/exercises/:exerciseID
//@descr    Get an individual exercise.
//@access   Public
exercisesRouter.get('/:exerciseID', async (req, res, next) => {
  try {
    const { exerciseID } = req.params;

    const exercise = await getExerciseByID(exerciseID);

    res.send(exercise);
  } catch (error) {
    next(error);
  }
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
  try {
    const { title, description, videoURL } = req.body;

    const { exerciseID, author } = await createExercise({
      title,
      description,
      videoURL,
    });

    res.send({
      success: true,
      message: 'New activity created',
      exerciseID,
      title,
      description,
      author,
      videoURL,
    });
  } catch (error) {
    next(error);
  }
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
