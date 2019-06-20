import bcrypt from 'bcrypt-nodejs';
import User from '../model/user';


export const signUp = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  const user = await User.create(req.body);
  if (!user) {
    return res.json({
      data: null,
      message: 'User not created',
    });
  }
  return res.json({
    data: user,
    message: 'User created successfully',
  });
};

export const getUsers = async (req, res) => {
  const users = await User.find({});
  if (!users || users.length === 0) {
    return res.json({
      data: [],
      message: 'users not found',
    });
  }
  return res.json({
    data: users,
    message: 'Users fetched successfully',
  });
};