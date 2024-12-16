const { authenticateRequest } = require('../middlewares/passport.middleware');
const router = require('express').Router();
const Parking = require('../controller/parking.controller');

module.exports = (app) => {
  router.get('/slot', authenticateRequest, Parking.checkSlot);
  router.post('/park', authenticateRequest, Parking.parkCar);
  router.post('/unpark', authenticateRequest, Parking.unparkCar);

  app.use('/', router);
};
