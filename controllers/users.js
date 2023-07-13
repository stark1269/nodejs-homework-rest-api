const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const HttpError = require('../utils/error');
const ctrlWrapper = require('../utils/ctrlWrapper');

const User = require('../models/user');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  };

  const hasPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hasPassword });

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  };

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw HttpError(401, 'Email or password is wrong');
  };

  const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: '24h'});

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    }
  });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};