const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
  // 1. Get auth header value
  const bearerHeader = req.headers['authorization'];

  // 2. Check if bearerHeader is undefined
  if (typeof bearerHeader !== 'undefined') {
    //   3. Split token at ' '
    const bearer = bearerHeader.split(' ');
    //  4. Get token from array
    const bearerToken = bearer[1];
    // 5. Set the token
    req.token = bearerToken;
    next();
  } else {
    return res.status(403).send({
      message: 'Access Denied!!!!!',
    });
  }
}

module.exports = verifyToken;
