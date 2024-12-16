const logger = require('pino');

module.exports = logger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
});
