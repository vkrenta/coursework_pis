import './config';
import express from 'express';
import log from './helpers/log';
import pool from './db';
import useRoutes from './routes';
import { logReq, logRes } from './middlewares/log.middleware';
import errorMiddleware from './middlewares/error.middleware';

process.on('uncaughtException', (e) =>
  log.error({ label: e.name, message: e.message })
);
process.on('unhandledRejection', (e) =>
  log.error({ label: e.name, message: e.message })
);

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(logReq);
app.use(logRes);

useRoutes(app);

app.use(errorMiddleware);

// 'postgres://postgres:vasya400@localhost:5432/football'

const start = async () => {
  try {
    await pool.connect();
    log.info({ label: 'PostgreSQL', message: 'successfully connected' });
    app.listen(process.env.PORT, () =>
      log.info({ label: 'Listening port', message: process.env.PORT })
    );
  } catch (e) {
    log.error(e);
    process.exit(-1);
  }
};

start();
