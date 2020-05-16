import './config';
import express from 'express';
import log from './helpers/log';
import pool from './db';

const app = express();

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
