/* eslint-disable eol-last */
import bcrypt from 'bcrypt-nodejs';
import User from '../model/user';
import responses from '../helper/responses';
import validateUser from '../helper/validateUser';


export const signUp = async (req, res) => {
  let field = req.body;
  const { error } = validateUser.validateUser(field);
  try {
    if (error) {
      return res.status(400).send({
        error: error.details.map(data => data.message).toString()
      });
    };
    
    let user = await User.findOne({phoneNumber: field.phoneNumber});
    if (user) return res.status(409).send(responses.error(409, `User with phone ${field.phoneNumber} exists`));

    user = new User({
      firstName: field.firstName,
      lastName: field.lastName,
      phoneNumber: field.phoneNumber,
      password: field.password
    });

    user.password = bcrypt.hashSync(field.password, bcrypt.genSaltSync(8), null);

    await user.save();

    return res.status(201).send(responses.success(201, 'User created Successfully', user));
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Internal server error, while creating a user'));
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users || users.length === 0) {
      return res.status(400).send(responses.error(400, 'users not found'));
    }
    return res.status(200).send(responses.success(200, 'Users fetched successfully', users));
  } catch (error) {
    return res.status(400).send(responses.error(400, 'users not found'));
  }
};