import pool from '../db';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

const loginController = async (req, res, next) => {
  const { login, password } = req.body;
  if (!(login && password))
    res.status(400).send({ message: 'missing required fields' });

  const {
    rows,
  } = await pool.query(
    'select id, password from users where email = $1 or phone = $1',
    [login]
  );

  const { id } = rows[0];
  const cPassword = rows[0].password;

  const compared = await compare(password, cPassword);

  if (!compared) return res.status(401).send({ message: 'Невірний пароль' });

  const token = sign({ id }, process.env.JWT_SECRET);

  res.send({ token });
};

export default loginController;
