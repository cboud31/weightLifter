// This is the web server.
const express = require('express');
const server = express();

// Access and load env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

// Use morgan middleware to log all requests.
const morgan = require('morgan');
server.use(morgan('dev'));

// Use bodyparser to handle json requests.
const bodyParser = require('body-parser');
server.use(bodyParser.json());

// API routes
server.get('/', (req, res) =>
  res.send({ msg: `Welcome to the weightLifter API!` })
);
server.use('/api/users', require('./routes/users'));
server.use('/api/routines', require('./routes/routines'));
server.use('/api/exercises', require('./routes/exercises'));

// Bring in the DB connection.
const { client } = require('./db');

// Connect to the server.
const PORT = process.env.PORT;
server.listen(PORT, async () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );

  try {
    await client.connect();
    console.log('Connection to database is successful!');
  } catch (error) {
    console.error('Error connecting to database!');
  }
});
