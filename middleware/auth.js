const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.header('token');

    if (!token) {
      return res.status(403).send({ message: 'Unauthorized Access' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(403).send({ message: 'Unauthorized Access' });
    next(error);
  }
};

module.exports = verifyToken;
