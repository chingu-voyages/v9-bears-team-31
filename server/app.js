// calls to middleware and server setup here
import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


dotenv.config();

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

app.all('/*', (req, res) => res.status(404).send({ message: '404 - Not found' }));

app.use((err, req, res) => res.status(500).send({ message: 'Opps something went wrong' }));

app.listen(app.get('port'), () => console.log(`API is listening on port ${app.get('port')}`));

export default app;
