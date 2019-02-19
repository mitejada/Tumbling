const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers")

const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/tumbling";
const db = pgp(connectionString);

passport.use(
  new LocalStrategy((username, email, password, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if(!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
