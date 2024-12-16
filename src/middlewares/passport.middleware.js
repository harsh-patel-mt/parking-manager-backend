const passport = require('passport');
require('../helpers/passport.helper');

exports.authenticateRequest = (req, res, next) => {
  passport.authenticate('jwt', function (err, user) {
    if (err) {
      console.log(err);
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    }
    if (!user) {
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    } else {
      return next();
    }
  })(req, res, next);
};
