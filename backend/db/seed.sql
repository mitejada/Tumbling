DROP DATABASE IF EXISTS tumbling;
CREATE DATABASE tumbling;

\c tumbling;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  password_scrambled VARCHAR NOT NULL UNIQUE,
  date_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  avatar_id VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  author_id INT REFERENCES users(id) ON DELETE CASCADE,
  posts_content TEXT NOT NULL,
  posts_img VARCHAR,
  posts_type VARCHAR,
  posts_link VARCHAR,
  posts_quote VARCHAR,
  date_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follow (
  id SERIAL PRIMARY KEY,
  followers_id INT REFERENCES users(id) ON DELETE CASCADE,
  following_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
  user_name VARCHAR REFERENCES users(username)
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
  tag_name VARCHAR NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
  users_name VARCHAR REFERENCES users(username),
  body VARCHAR NOT NULL
);

INSERT INTO users (username, email, password_scrambled, avatar_id)
VALUES ('aaron', 'aaron@aaron.com', 'aaron', 'https://media.npr.org/assets/img/2016/08/07/ap_547006314025_custom-79aa3abcc83be8331cf8b86cb85b5c4c11e31e14-s800-c85.jpg'), ('jimmy', 'jimmy@j.com', '1', 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg?output-quality=60&resize=1000:*');

INSERT INTO posts (author_id, posts_content, posts_img, posts_type, posts_link, posts_quote)
VALUES (1, 'My first post !', null, 'text', null, null),
(1, 'This tumbling site is amazing', null, 'text', null, null),
(1, 'Check out the nice pic I took on vacation !', 'https://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/Experiences_Beach.jpg', 'image', null, null),
(2, 'I love coconut drinks!', 'https://www.libertytravel.com/sites/default/files/styles/full_size/public/all%20inclusive-hero%20%281%29.jpg?itok=JjwsPBPZ', 'image', null, null),
(2, 'Today I am having a great day', null, 'text', null, null),
(2, 'That waterfall looks amazing', 'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?cs=srgb&dl=hd-wallpaper-landscape-long-exposure-68147.jpg&fm=jpg', 'image', null, null);

INSERT INTO likes (posts_id, user_name)
VALUES (1, 'jimmy'), (2, 'jimmy'), (3, 'jimmy'), (4, 'aaron'), (5, 'aaron'), (6, 'aaron');

INSERT INTO comments(posts_id, users_name, body)
VALUES (1, 'jimmy', 'nice post bro'), (2, 'jimmy', 'this is pretty sick'), (2, 'aaron', 'right back atcha brother'), (2, 'jimmy', 'pretty dope')
