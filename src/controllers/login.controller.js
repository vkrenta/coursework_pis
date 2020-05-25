import pool from '../db';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
const loginController = async (req, res, next) => {
  const { login, password, remember } = req.body;
  if (!(login && password))
    res.status(400).send({ message: 'missing required fields' });

  const {
    rows,
    rowCount,
  } = await pool.query(
    'select id, password from users where email = $1 or phone = $1',
    [login]
  );

  if (!rowCount)
    return res.status(401).send({ message: 'Даного користувача не існує' });

  const { id } = rows[0];
  const cPassword = rows[0].password;

  const compared = await compare(password, cPassword);

  if (!compared) return res.status(401).send({ message: 'Невірний пароль' });

  const token = sign({ id }, process.env.JWT_SECRET);

  if (remember)
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000 * 24,
      sameSite: 'None',
    });
  else
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'None',
    });

  res.send({ message: 'Ви успішно увійшли' });
};

export default loginController;
