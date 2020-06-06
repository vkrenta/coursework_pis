export default function logOutController(req, res, next) {
  try {
    res.clearCookie('token').send({ message: 'Ви вийшли із системи' });
  } catch (e) {
    next(e);
  }
}
