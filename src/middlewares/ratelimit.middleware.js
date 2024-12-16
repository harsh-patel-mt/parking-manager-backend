const { rateLimit } = require('express-rate-limit');

exports.rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min in milliseconds
  max: 20,
  message: 'You have exceeded the 20 requests in 1 minute limit!',
  standardHeaders: true,
  legacyHeaders: false,
});
