import express from 'express';
import {
  createTaxi,
  findATaxi,
  findAllTaxi,
} from '../controller/taxiController';

const taxiRouter = express.Router();

taxiRouter.route('/taxis')
  .post(createTaxi)
  .get(findAllTaxi);
  
taxiRouter.route('/taxis/:plateNumber')
  .get(findATaxi);

export default taxiRouter;
