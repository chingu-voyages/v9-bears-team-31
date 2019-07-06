/* jshint esversion: 8 */
/* jshint -W097 */
/* jshint node: true */

import Joi from 'joi';

export default {
  // create taxi validation
  validateTaxi: field => {
    const schema = Joi.object().keys({
      imageURL: Joi.string()
        .strict()
        .trim(),
      imageID: Joi.string()
        .strict()
        .trim(),
      plateNumber: Joi.string()
        .strict()
        .trim()
        .required(),
      model: Joi.string()
        .strict()
        .trim(),
        .required()
    });
    return Joi.validate(field, schema);
  }
};
