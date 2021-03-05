const usersRouter = require('express').Router();

const { check, validationResult } = require('express-validator');
const verifyToken = require('../middleware/verifyToken');
const {
  getUserByUsername,
  getUserByEmail,
  getUserByID,
  createUser,
} = require('../db/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

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
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      // 1. Destructure the req.body
      const { firstName, lastName, username, email, password } = req.body;
      // 2. Check is user exists
      const userVerify = await getUserByUsername(username);
      const emailVerify = await getUserByEmail(email);

      if (userVerify.length !== 0) {
        return res.send({
          success: false,
          message: 'Username already exists!',
        });
      }

      if (emailVerify.length !== 0) {
        return res.send({
          success: false,
          message: 'An account for this e-mail already exists!',
        });
      }
      // 3. Bcrypt the user password
      // 4. Create new user in the database.
      let user = await createUser({
        firstName,
        lastName,
        username,
        email,
        password,
      });
      // 5. Generate and return JWT token
      jwt.sign({ user }, process.env.jwtSecret, (err, token) => {
        res.send({
          success: true,
          message: 'New user registered.',
          username,
          token: token,
          userID: user[0].userID,
        });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: 'Server Error' });
    }
  }
);

//@route    POST /api/users/login
//@descr    Logs in a registered user.
//@access   Public
usersRouter.post(
  '/login',
  [
    check('username', 'Invalid Credentials').not().isEmpty(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      // 1. Destructure the req.body
      const { username, password } = req.body;
      // 2. Check if the user exists
      const user = await getUserByUsername(username);
      if (user.length === 0) {
        return res.status(400).send({
          success: false,
          message: 'Invalid Credentials!',
        });
      }
      // 3. Check incoming password against password in the database.
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (!validPassword) {
        return res.status(400).send({
          success: false,
          message: 'Invalid Credentials',
        });
      }
      // 4. Generate a JWT token
      jwt.sign({ user }, process.env.jwtSecret, (err, token) => {
        res.send({
          success: true,
          message: `You are logged in as ${username}.`,
          userID: user[0].userID,
          token,
        });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: 'Server Error' });
    }
  }
);

//@route    GET /api/users/dashboard
//@descr    Retrieve a user's info.
//@access   Private
usersRouter.get('/dashboard', verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, process.env.jwtSecret, (err, authData) => {
      if (err) {
        console.error(err);
        res.status(403).send('403 Error');
      } else {
        const {
          userID,
          firstName,
          lastName,
          username,
          email,
          registerDate,
        } = authData.user[0];
        res.send({
          success: true,
          userID,
          firstName,
          lastName,
          username,
          email,
          registerDate,
        });
      }
      // const { userID, username, email } = authData.user[0];
      // res.send({
      //   sucess: true,
      //   message: `Welcome ${username}`,
      //   userID,
      //   username,
      //   email,
      //   token: req.token,
      // });
    });
  } catch (error) {
    res.status(500).send({ message: 'Server Error!' });
    console.error(error.message);
  }
});

module.exports = usersRouter;
