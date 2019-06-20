import express from 'express';
import {
  signUp,
  getUsers,
} from '../controller/userController';
import {
  login,
} from '../controller/authController';

const userRouter = express.Router();

userRouter.route('/users')
  .get(getUsers)
  .post(signUp);

userRouter.route('/login')
  .post(login);

export default userRouter;