// calls to middleware and server setup here
import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import appRoute from './router/index';


dotenv.config();


mongoose.Promise = global.Promise;

mongoose.connect(process.env.DBURL, {
  auto_reconnect: true,
  useNewUrlParser: true,
  keepAlive: 30000,
}).then(
  () => console.log('connection to database was established'),
  err => console.error('connection to database failed'),
);

const app = express();
app.use(cors());
app.set('port', process.env.PORT);

app.use(bodyParser.json({
  type: 'application/json',
}));
app.use(bodyParser.urlencoded({
  extended: true,
}));


app.get('/api', (req, res) => res.status(200).send({
  message: 'API is alive and kickin - check.',
}));

app.use('/api/v1', appRoute);

app.all('/*', (req, res) => res.status(404).send({
  message: '404 - Not found',
}));

app.use((err, req, res) => res.status(500).send({
  message: 'Opps something went wrong',
}));

app.listen(app.get('port'), () => console.log(`API is listening on port ${app.get('port')}`));

export default app;