DROP DATABASE IF EXISTS tumbling;
CREATE DATABASE tumbling;

\c tumbling;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  avatar_id VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  author_id INT REFERENCES users(id) ON DELETE CASCADE,
  posts_type VARCHAR NOT NULL,
  posts_content TEXT NOT NULL,
  date_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  avatar_id VARCHAR NOT NULL
);

CREATE TABLE follow (
  id SERIAL PRIMARY KEY,
  followers_id INT REFERENCES users(id) ON DELETE CASCADE,
  following_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE,
  user_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
  tag_name VARCHAR NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  tags_id INT REFERENCES posts(id) ON DELETE CASCADE,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE,
  body VARCHAR NOT NULL
);

INSERT INTO users (username, email, password, avatar_id)
VALUES ('mitejada', 'michell@pursuit.org', 'scooby93', 'scooby.jpeg')