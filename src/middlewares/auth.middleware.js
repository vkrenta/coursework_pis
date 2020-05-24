import { verify } from 'jsonwebtoken';
import log from '../helpers/log';

const authMiddleware = async (req, res, next) => {
  try {
    log.info({
      label: 'Cookies',
      message: req.cookies,
    });
    const { token } = req.cookies;

    if (!token) return res.status(401).send({ message: 'No token provided' });

    try {
      req.body.id = verify(token, process.env.JWT_SECRET).id;
    } catch (err) {
      return res.status(401).send({ message: 'Bad or expired token provided' });
    }

    next();
  } catch (e) {
    next(e);
  }
};

export default authMiddleware;
