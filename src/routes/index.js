import authRouter from './auth.route';
import verifyEmailRoute from './verify-email.route';
import userRouter from './user.route';

const useRoutes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/verify', verifyEmailRoute);
  app.use('/api', userRouter);
};

export default useRoutes;
