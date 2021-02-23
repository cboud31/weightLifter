CREATE TABLE users(
    "userID" uuid DEFAULT uuid_generate_v4 () UNIQUE,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    "registerDate" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "imageURL" VARCHAR(255) DEFAULT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
)

CREATE TABLE routines(
    "routineID" SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(255) REFERENCES users(username),
    author_id uuid REFERENCES users("userID")
    -- sets & reps? Might need a new table for this
)

CREATE TABLE exercises(
    "exerciseID" SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    "videoURL" VARCHAR(255) DEFAULT NULL,
    author VARCHAR(255) REFERENCES users(username),
    author_id uuid REFERENCES users("userID")
)