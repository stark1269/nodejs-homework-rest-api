const HttpError = require('../utils/error');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(" ");
  
  if (bearer !== 'Bearer') {
    next(HttpError(401, "Not authorized"));
  };

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      next(HttpError(401, "Not authorized"));
    };

    req.user = user;
    next();
    
  } catch {
    next(HttpError(401, "Not authorized"));
  };

};

module.exports = auth;