import express from 'express';
import {
  addUser, getUsers,
} from '../controller/userController';

const userRouter = express.Router();

userRouter.route('/users')
  .get(getUsers)
  .post(addUser);

export default userRouter;
