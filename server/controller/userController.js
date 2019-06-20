import bcrypt from 'bcrypt-nodejs';
import User from '../model/user';
import responses from '../helper/responses';


export const signUp = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  const user = await User.create(req.body);
  if (!user) {
    return res.status(400).send(responses.error(400, 'User not created '));
  }
  return res.status(201).send(responses.success(201, 'User created Successfully', user));
};

export const getUsers = async (req, res) => {
  const users = await User.find({});
  if (!users || users.length === 0) {
    return res.status(400).send(responses.error(400, 'users not found'));
  }
  return res.status(200).send(responses.success(200, 'Users fetched successfully', users));
};
