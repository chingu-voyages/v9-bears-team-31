/* eslint-disable eol-last */
import bcrypt from 'bcrypt-nodejs';
import _ from 'lodash';
import Review from '../model/review';
import responses from '../helper/responses';
import validateReview from '../helper/validateReview';


export const review = async (req, res) => {
  let field = req.body;
  const { error } = validateReview.validateReview(field);
  try {
    if (error) {
      return res.status(400).send({
        error: error.details.map(data => data.message).toString()
      });
    };

    let review = new Review({
      userPhoneNumber: field.userPhoneNumber,
      taxiPlateNumber: field.taxiPlateNumber,
      userReview: field.userReview,
      userComment: field.userComment,
    });

    await review.save();

    return res.status(201).send(responses.success(201, 'Review created Successfully', review));
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Internal server error, while creating a review'));
  }
};
