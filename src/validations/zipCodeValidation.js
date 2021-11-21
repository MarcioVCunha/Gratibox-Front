import joi from 'joi';

const zipCodeSchema = joi.object({
  zipCode: joi.string().regex(/^[0-9]{8}$/).required(),
}).length(1);

export { zipCodeSchema };