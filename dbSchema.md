# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password        | string    | not null

*user has a profile, a dashboard, a search bar*

## blogs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, references users(id)
post_type       | string    | not null, unique
post_content    | string    | not null, url
date_stamp      | date time | not null

## logos(avitars)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, references users(id)

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
post_id         | integer   | references users(id)
user_id         | integer   | references blogs(id)
