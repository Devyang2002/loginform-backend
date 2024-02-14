const Joi = require('joi');

// define user schema as joi object
const userSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  password: Joi.string().min(6).regex(/^(?=.*[!@#$%^&*])/).required(),
});

// function to validate user object
function validateUser(newUser) {
  const { error } = userSchema.validate(newUser, { abortEarly: false });
  if (error) {
    throw { validationError: true, message: error.details.map((detail) => detail.message) };
  }
}

module.exports = { validateUser };

  