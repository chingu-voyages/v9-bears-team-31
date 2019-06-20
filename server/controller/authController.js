/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt-nodejs';
import User from '../model/user';
import {
  generateToken,
} from '../services/jwtService';

export const login = async (req, res) => {
  const {
    phoneNumber,
    password,
  } = req.body;
  const user = await User.findOne({
    phoneNumber,
  });
  if (!user) {
    return res.json({
      data: null,
      message: 'Incorrect phone number or password',
    });
  }
  if (bcrypt.compareSync(password, user.password) && user) {
    const userObj = {
      id: user._id,
      phoneNumber: user.email,
      firstName: user.firstName,
    };
    const token = await generateToken(userObj);
    return res.status(200).send({
      data: user,
      token,
      message: 'User login Successfully',
    });
  }
};
