require('dotenv').config();

const HttpError = require('../utils/error');

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(" ");
  
  if (bearer !== 'Bearer' || !token) {
    next(HttpError(401, "Not authorized"));
  };

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    };

    req.user = user;
    next();

  } catch {
    next(HttpError(401, "Not authorized"));
  };
};

module.exports = auth;