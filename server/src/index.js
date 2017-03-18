import {logger} from './util';
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server listening at http://localhost:${port}`);
});

process.on('uncaughtException', err => logger.error('uncaught exception', err));
process.on('unhandledRejection', error => logger.error('uncaught exception', error));