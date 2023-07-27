const Joi = require('joi');

const joiSchemaAll = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const joiSchemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const joiSchemaRegisterAndLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const joiSchemaVerifyEmail = Joi.object({
  email: Joi.string().email().required(),
});

const joiSchemaSubscription = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

module.exports = {
  joiSchemaAll,
  joiSchemaFavorite,
  joiSchemaRegisterAndLogin,
  joiSchemaVerifyEmail,
  joiSchemaSubscription,
};