const usersRouter = require('express').Router();

const { check, validationResult } = require('express-validator');

//@route    POST /api/users/register
//@descr    Registers a new user into the database.
//@access   Public
usersRouter.post(
  '/register',
  [
    check('firstName', 'Required field(s) missing!').not().isEmpty(),
    check('lastName', 'Required field(s) missing!').not().isEmpty(),
    check('username', 'Required field(s) missing!').not().isEmpty(),
    check('email', 'Please enter a valid email address.').isEmail(),
    check('password', 'Password must be at least 8 characters long!').isLength({
      min: 8,
    }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    res.send({
      success: 'true',
      message: 'This route registers a new user into the database.',
    });
  }
);

//@route    POST /api/users/login
//@descr    Logs in a registered user.
//@access   Public
usersRouter.post('/login', async (req, res, next) => {
  res.send({
    success: 'true',
    message: 'This route logs in a registered user.',
  });
});

//@route    GET /api/users/dashboard
//@descr    Retrieve a user's info.
//@access   Private
usersRouter.get('/dashboard', async (req, res, next) => {
  res.send({
    success: 'true',
    message: `This route retrieves a user's info.`,
  });
});

module.exports = usersRouter;
