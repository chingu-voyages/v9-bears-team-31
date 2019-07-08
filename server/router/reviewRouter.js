import express from 'express';
import { review } from '../controller/reviewController';
import auth from '../middleware/auth';

const reviewRouter = express.Router();

reviewRouter.route('/review')
  .post(auth, review);

export default reviewRouter;
