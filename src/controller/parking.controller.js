const { query, validationResult, body } = require('express-validator');
const ApiResponse = require('../helpers/response.helper');
const { getParkingSlotInfo, parkCar, unparkCar } = require('../services/parking.service');

exports.checkSlot = [
  query('slot').not().isEmpty().withMessage('Please send slot'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ApiResponse.validationErrorWithData(res, 'Validation Error.', errors.array());
    }

    const { slot } = req.query;

    const slotInfo = await getParkingSlotInfo(slot);
    if (!slotInfo) {
      return ApiResponse.resourceNotAvailable(res, 'Invalid slot number!');
    }
    return ApiResponse.successResponseWithData(res, 'Slot Found!', slotInfo);
  },
];

exports.parkCar = [
  body('car').not().isEmpty().withMessage('Please send car'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ApiResponse.validationErrorWithData(res, 'Validation Error.', errors.array());
    }

    const { car } = req.body;
    const slotInfo = await parkCar(car);
    if (!slotInfo) {
      return ApiResponse.resourceNotAvailable(res, 'Parking Full!');
    }
    return ApiResponse.successResponseWithData(res, 'Slot Found!', slotInfo);
  },
];

exports.unparkCar = [
  body('car').not().isEmpty().withMessage('Please send car'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ApiResponse.validationErrorWithData(res, 'Validation Error.', errors.array());
    }

    const { car } = req.body;
    const slotInfo = await unparkCar(car);
    if (!slotInfo) {
      return ApiResponse.resourceNotAvailable(res, 'Car not found!');
    }
    return ApiResponse.successResponseWithData(res, 'Car Found and Slot is available now!', slotInfo);
  },
];
