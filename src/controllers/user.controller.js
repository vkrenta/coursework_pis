/* eslint-disable camelcase */
import pool from '../db';

const userController = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).send({ message: 'Missing id' });

    const { name, phone, email, created_at } = (
      await pool.query('select * from users where users.id = $1', [id])
    ).rows[0];
    const { orders_count } = (
      await pool.query(
        `select count(*) as orders_count from orders
      inner join users on users.id=user_id
      where user_id=$1`,
        [id]
      )
    ).rows[0];

    res.send({ name, phone, email, orders_count, created_at });
  } catch (e) {
    next(e);
  }
};

export default userController;
