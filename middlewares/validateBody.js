const HttpError = require('../utils/error');

const validateBody = schema => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, 'missing fields'));
    }
    next();
  }
};

module.exports = validateBody;