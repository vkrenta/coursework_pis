import pool from '../db';
import { verify } from '../helpers/verify-email';

const verifyEmailController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fullName, email, password, phone } = verify(
      id,
      process.env.LINK_SECRET
    );
    const {
      rowCount,
    } = await pool.query(
      'select email from users where email = $1 or phone = $2',
      [email, phone]
    );

    if (rowCount)
      return res.redirect(process.env.CLIENT_LINK + '/verifiedtwice');

    await pool.query(
      `insert into users(name, phone, email, password) values ($1, $2, $3, $4);`,
      [fullName, phone, email, password]
    );

    res.redirect(process.env.CLIENT_LINK + '/verifiedsuccess');
  } catch (e) {
    if (e.code === 2000) {
      res.redirect(process.env.CLIENT_LINK + '/verifiedexpired');
    }
    next(e);
  }
};

export default verifyEmailController;
