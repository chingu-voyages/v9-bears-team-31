import express from 'express';
import userRoute from './userRouter';
import taxiRoute from './taxiRouter';

const app = express();

app.use('/', userRoute);
app.use('/', taxiRoute);

export default app;
