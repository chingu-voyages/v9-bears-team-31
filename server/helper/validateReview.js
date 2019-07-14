/* jshint esversion: 8 */
/* jshint -W097 */
/* jshint node: true */

import Joi from 'joi';

export default {
  // create taxi validation
  validateReview: field => {
    const schema = Joi.object().keys({
      userPhoneNumber: Joi.string()
        .strict()
        .trim()
        .required(),
      taxiPlateNumber: Joi.string()
        .strict()
        .trim()
        .required(),
      userReview: Joi.number()
        .required(),
      userComment: Joi.string()
        .strict()
        .trim()
        .min(10)
        .max(100)
        .required(),
    });
    return Joi.validate(field, schema);
  }
};
