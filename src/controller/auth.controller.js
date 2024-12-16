const jwt = require('jsonwebtoken');
const { successResponseWithData } = require('../helpers/response.helper');
const { JWT_SECRET } = require('../utils/Const');

exports.login = [
  async (req, res) => {
    const user = {
      email: 'test@gmail.com',
    };
    const token = jwt.sign(user, JWT_SECRET);

    return successResponseWithData(res, 'Loged in!', { ...user, token });
  },
];
