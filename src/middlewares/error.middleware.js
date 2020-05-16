import log from '../helpers/log';

const errorMiddleware = (err, req, res, next) => {
  log.error(JSON.stringify(err, null, '  '));
  res.status(500).send(err);
};

export default errorMiddleware;
