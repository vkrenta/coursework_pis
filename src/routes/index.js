import authRouter from './auth.route';
import verifyEmailRoute from './verify-email.route';
import userRouter from './user.route';
import eventRouter from './events.route';

const useRoutes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/verify', verifyEmailRoute);
  app.use('/api', userRouter);
  app.use('/api/events', eventRouter);
};

export default useRoutes;
