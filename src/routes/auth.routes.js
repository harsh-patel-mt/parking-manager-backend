module.exports = (app) => {
  const router = require('express').Router();
  const Login = require('../controller/auth.controller');

  router.post('/login', Login.login);

  app.use('/', router);
};
