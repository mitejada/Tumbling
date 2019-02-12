# API STRUCTURE

## HTML API

### ROOT
* `GET /`
  * loads the React web app

## JSON API

### HOME PAGE
* `POST /users`
  * allows the user to sign up
* `GET /users`
  * grabs users profile based on username / email & password

### USERS
* `POST /users`
  * Creates a new user
* `GET /users/:users_id`
  * Grabs a single user profile
* `PATCH /users/:users_id`
  * Allows the user to update their info
* `DELETE /users/:users_id`
  * Deletes a single user

### POSTS
* `GET /posts`
  * get all posts
* `POST /post/`
  * allows you to post a posts
* `GET /post/:post_id`
  * grabs the posts based on their id
* `PATCH /post/:post_id/edit`
  * allows you to edit a single posts
* `DELETE /post/:post_id/delete`
  * allows you to delete a single posts

### LIKES
* `GET /users/:users_id/likes`
  * gets all likes for the user
* `GET /post/:post_id/likes`
  * gets likes for a specific posts
* `POST /users/likes`
  * add new like on post
* `DELETE /users/unlike`
  * delete like


### FOLLOWERS
* `GET /users/:users_id/followers`
  * gets all followers for the user
* `POST /users/follow`
  * add follower
* `DELETE /users/unfollow`
  * delete a follow
* `GET /users/following`
  * display the following for a users

### FOLLOWING
* `GET /users/:users_id/following`
  * gets all users the user is following

### TAGS
* `GET /post/:post_id/tags`
  * get all tags for post 
