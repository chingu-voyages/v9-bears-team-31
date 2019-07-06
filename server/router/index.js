import express from 'express';
import userRoute from './userRouter';
import taxiRoute from './taxiRouter';
import reviewRoute from './reviewRouter';

const app = express();

app.use('/', userRoute);
app.use('/', taxiRoute);
app.use('/', reviewRoute);

export default app;
