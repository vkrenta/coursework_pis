import { Router } from 'express';
import registerController from '../controllers/register.controller';
import loginController from '../controllers/login.controller';
import logOutController from '../controllers/logOut.controller';

const authRouter = Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

authRouter.get('/logout', logOutController);

export default authRouter;
