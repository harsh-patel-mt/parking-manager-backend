const app = require('./app');
const logger = require('./src/helpers/logger.helper');

const port = process.env.PORT || 8000;

const server = app.listen(port, function () {
  logger.info(`Express server listening on port ${port}`);
});

server.timeout = 1200000;
