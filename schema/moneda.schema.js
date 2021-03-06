const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();

const createMonedaSchema = Joi.object({
  nombre: nombre.required(),
});

const updateMonedaSchema = Joi.object({
  nombre: nombre,
});

const getMonedaSchema = Joi.object({
  id: id.required()
});

module.exports = { createMonedaSchema, updateMonedaSchema, getMonedaSchema };
