exports.successResponse = function (res, msg) {
  const resData = {
    status: 1,
    message: msg,
  };
  return res.status(200).json(resData);
};

exports.successResponseWithData = function (res, msg, data) {
  const resData = {
    status: 1,
    message: msg,
    data,
  };
  return res.status(200).json(resData);
};

exports.errorResponse = function (res, msg) {
  const resData = {
    status: 0,
    message: msg,
  };
  return res.status(500).json(resData);
};

exports.errorResponseWithData = function (res, msg, data) {
  const resData = {
    status: 0,
    message: msg,
    data,
  };
  return res.status(500).json(resData);
};

exports.databaseErrorResponse = function (res, msg) {
  const resData = {
    status: 0,
    message: msg,
  };
  return res.status(500).json(resData);
};

exports.validationErrorWithData = function (res, msg, data) {
  const resData = {
    status: 0,
    message: msg,
    data,
  };
  return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
  const resData = {
    status: 0,
    message: msg,
  };
  return res.status(401).json(resData);
};

exports.unauthorizedResponseWithData = function (res, msg, data) {
  const resData = {
    status: 0,
    message: msg,
    data,
  };
  return res.status(401).json(resData);
};

exports.forbiddenResponse = function (res, msg) {
  const resData = {
    status: 0,
    message: msg,
  };
  return res.status(403).json(resData);
};

exports.resourceNotAvailable = function (res, msg) {
  const resData = {
    status: 0,
    message: msg,
  };
  return res.status(404).json(resData);
};
