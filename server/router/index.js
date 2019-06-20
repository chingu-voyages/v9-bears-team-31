import express from 'express';
import userRoute from './userRouter';

const app = express();

app.use('/', userRoute);

export default app;
