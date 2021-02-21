const routinesRouter = require('express').Router();

//@route    GET /api/routines/
//@descr    Get all routines in the database.
//@access   Public
routinesRouter.get('/', async (req, res, next) => {
  res.send({
    success: 'true',
    message: 'This route gets all routines from the database.',
  });
});

//@route    GET /api/routines/:userID
//@descr    Get all routines created by a user.
//@access   Private
routinesRouter.get('/:userID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route gets all routines created by user with id of ${req.params.userID}.`,
  });
});

//@route    POST /api/routines/
//@descr    Create a new routine.
//@access   Private
routinesRouter.post('/', async (req, res, next) => {
  res.send({
    success: 'true',
    message: 'This route creates a new routine in the database.',
  });
});

//@route    PATCH /api/routines/:routineID
//@descr    Update an existing routine
//@access   Private
routinesRouter.patch('/:routineID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route updates routine with ID of ${req.params.routineID}.`,
  });
});

//@route    DELETE /api/routines/:routineID
//@descr    Delete an existing routine
//@access   Private
routinesRouter.delete('/:routineID', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route deletes routine with ID of ${req.params.routineID}.`,
  });
});

module.exports = routinesRouter;
