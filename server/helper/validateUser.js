
/* jshint esversion: 8 */
/* jshint -W097 */
/* jshint node: true */

import Joi from 'joi';

export default {
  // user SignUp
  validateUser: field => {
    const schema = Joi.object().keys({
      firstName: Joi.string()
        .strict()
        .trim()
        .required(),
      lastName: Joi.string()
        .strict()
        .trim()
        .required(),
      phoneNumber: Joi.string()
        .strict()
        .trim()
        .min(13)
        .max(14)
        .required(),
      password: Joi.string()
        .min(6)
        .max(30)
        .required()
    });
    return Joi.validate(field, schema);
  }
};
