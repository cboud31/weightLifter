CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    "registerDate" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "imageURL" VARCHAR(255) DEFAULT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
)

CREATE TABLE routines(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    -- creator ID references user ID
    -- sets & reps? Might need a new table for this
)

CREATE TABLE exercises(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    "videoURL" VARCHAR(255) DEFAULT NULL,
    -- creator ID references user ID
)