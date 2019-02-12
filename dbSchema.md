# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password        | string    | not null
user_avatar     | url       | not null

## posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, references users(id)
posts_type      | string    | not null, unique
posts_content   | string    | not null, url
date_stamp      | date time | not null

## follow
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
followers_id    | integer   | references users(id)
following_id    | integer   | references users(id)

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
posts_id        | integer   | references users(id)
user_id         | integer   | references posts(id)

## tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
posts_id        | integer   | references posts(id)
tag_name        | string    | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
tags_id         | integer   | references posts(id)
posts_id        | integer   | references posts(id)
user_id         | integer   | references users(id)
body            | text      | not null
