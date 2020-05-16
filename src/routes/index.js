import authRouter from './auth.route';

const useRoutes = (app) => {
  app.use('/api/auth', authRouter);
};

export default useRoutes;
