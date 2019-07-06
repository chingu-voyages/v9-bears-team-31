import express from 'express';
import { review } from '../controller/reviewController';

const reviewRouter = express.Router();

reviewRouter.route('/review')
  .post(review);

export default reviewRouter;
