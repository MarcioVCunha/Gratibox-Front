import joi from 'joi';

const registerSchema = joi.object({
  name: joi.string().min(3).max(60).required(),
  email: joi.string().email({ tlds: { allow: false } }).max(60).required(),
  password: joi.string().min(3).max(60).required(),
  passwordRepeat: joi.ref('password')
}).length(4);

export { registerSchema };