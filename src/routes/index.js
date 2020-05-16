import authRouter from './auth.route';
import verifyEmailRoute from './verify-email.route';

const useRoutes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/verify', verifyEmailRoute);
};

export default useRoutes;
