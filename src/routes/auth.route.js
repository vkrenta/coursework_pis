import { Router } from 'express';
import registerController from '../controllers/register.controller';

const authRouter = Router();

authRouter.post('/register', registerController);

export default authRouter;
