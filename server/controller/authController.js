/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt-nodejs';
import User from '../model/user';
import {
  generateToken,
} from '../services/jwtService';
import responses from '../helper/responses';


export const login = async (req, res) => {
  const {
    phoneNumber,
    password,
  } = req.body;
  const user = await User.findOne({
    phoneNumber,
  });
  if (!user) {
    return res.status(400).send(responses.error(400, 'Incorrect phone number or password'));
  }
  if (bcrypt.compareSync(password, user.password) && user) {
    const userObj = {
      id: user._id,
      phoneNumber: user.email,
      firstName: user.firstName,
    };
    const token = await generateToken(userObj);
    const data = {
      user,
      token,
    };
    return res.status(200).send(responses.success(200, 'User login Successfully', data));
  }
  return res.status(400).send(responses.error(400, 'Incorrect phone number or password'));
};