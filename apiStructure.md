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
  * Allows the user to update their profile

### BLOGS
* `GET /blog`
  * get blog info
* `POST /blog/post`
  * allows you to post a blog
* `GET /blog/:blog_id`
  * grabs the blog based on their id
* `PATCH /blog/:blog_id/edit`
  * allows you to edit a single blog
* `DELETE /blog/:blog_id/delete`
  * allows you to delete a single blog
* `GET /blog/:blog_id/likes`
  * gets likes for a specific blog
* `GET /blog/:blog_id/following`
  * display the following for a specific blog

### LIKES
* `GET /users/:users_id/likes`
  * gets all likes for the user

### FOLLOWERS
* `GET /users/:users_id/followers`
  * gets all followers for the user

### FOLLOWING
* `GET /users/:users_id/following`
  * gets all users the user is following
