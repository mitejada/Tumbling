const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers")

const { db } = require('../db/queries/index.js')


passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if(!helpers.comparePass(password, user.password_scrambled)) {
          return done(null, false);
        } else {
          return done(null, {username: user.username, id: user.id, avatar_id: user.avatar_id});
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
