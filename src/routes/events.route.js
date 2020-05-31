import { Router } from 'express';
import getEventsController from '../controllers/getEvents.controller';

const eventRouter = Router();

eventRouter.get('/all', getEventsController);

export default eventRouter;
