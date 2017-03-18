import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import {logger} from './util';

const app = express();

app.use(morgan('combined', {stream: logger.stream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use((err, req, res, next) => {
  logger.info(err.stack);
  res.status(500).send(err);
});

export default app;