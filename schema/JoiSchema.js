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

module.exports = {
  joiSchemaAll,
  joiSchemaFavorite,
}