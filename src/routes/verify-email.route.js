import { Router } from 'express';
import verifyEmailController from '../controllers/verifyEmail.controller';

const verifyEmailRoute = Router();

verifyEmailRoute.get('/:id', verifyEmailController);

export default verifyEmailRoute;
