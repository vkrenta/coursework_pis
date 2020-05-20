import { Router } from 'express';
import registerController from '../controllers/register.controller';
import loginController from '../controllers/login.controller';

const authRouter = Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

export default authRouter;
