const passport = require("passport");
const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/tumbling";
const db = pgp(connectionString);

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, {username: user.username, id: user.id, avatar_id: user.avatar_id});
  });

  passport.deserializeUser((user, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: user.username
    })
      .then(user => {
        done(null, {username: user.username, id: user.id, avatar_id: user.avatar_id});
      })
      .catch(err => {
        done(err, null);
      });
  });
};
