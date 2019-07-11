import express from 'express';
import {
  createTaxi,
  findATaxi,
  findAllTaxi,
  upload,
} from '../controller/taxiController';
import { multerUploads } from '../middleware/multer';
import auth from '../middleware/auth';
import admin from '../middleware/admin';

const taxiRouter = express.Router();

taxiRouter.route('/taxis')
  .post([multerUploads], createTaxi)
  .get(findAllTaxi);
  
taxiRouter.route('/taxis/:plateNumber')
  .get(findATaxi);

export default taxiRouter;
