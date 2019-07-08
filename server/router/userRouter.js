import express from 'express';
import {
  signUp,
  getUsers,
} from '../controller/userController';
import {
  login,
} from '../controller/authController';
import auth from '../middleware/auth';
import admin from '../middleware/admin';

const userRouter = express.Router();

userRouter.route('/users')
  .get([admin, auth], getUsers)
  .post(signUp);

userRouter.route('/login')
  .post(login);

export default userRouter;