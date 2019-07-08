import express from 'express';
import {
  createTaxi,
  findATaxi,
  findAllTaxi,
  upload,
} from '../controller/taxiController';
import { multerUploads } from '../middleware/multer';

const taxiRouter = express.Router();

taxiRouter.route('/taxis')
  .post(multerUploads, createTaxi)
  .get(findAllTaxi);
  
taxiRouter.route('/taxis/:plateNumber')
  .get(findATaxi);

export default taxiRouter;
