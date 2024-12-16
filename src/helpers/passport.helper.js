const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const passport = require('passport');

const { JWT_SECRET } = require('../utils/Const');

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    function (jwtPayload, done) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      if (jwtPayload.email === 'test@gmail.com') {
        return done(undefined, jwtPayload, jwtPayload);
      } else {
        return done(undefined, false);
      }
    },
  ),
);
