const express = require('express');
const Cors = require('cors');
const dotenv = require('dotenv');

const { successResponse } = require('./src/helpers/response.helper');
const { rateLimiter } = require('./src/middlewares/ratelimit.middleware');

const app = express();
dotenv.config();

app.use(Cors());
app.use(rateLimiter);
app.use(
  express.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true,
  }),
);
app.use(express.json());
app.get('/', (req, res) => {
  return successResponse(res, 'PARKING MANAGER BACKEND APIs.');
});

require('./src/routes/parking.routes')(app);
require('./src/routes/auth.routes')(app);

module.exports = app;
