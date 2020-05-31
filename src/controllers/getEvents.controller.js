import pool from '../db';

export default async function getEventsController(req, res, next) {
  try {
    const { rows } = await pool.query(
      `select event_id, event_name, begins_at, stadium_id, stadium.name as stadium_name,free_places from
      (select events.id as event_id, events.name as event_name, 
      begins_at, stadium_id,
      count(case place_status.status when false then 1 else null end) as free_places
      from events
      inner join place_status on place_status.event_id=events.id
      group by events.id) as foo
    inner join stadium on stadium.id=stadium_id
    where begins_at > now()::date + 1 and free_places>0`
    );

    if (rows.length === 0)
      return res.status(204).send({ message: 'Зараз подій немає' });

    res.send({ rows });
  } catch (e) {
    next(e);
  }
}
