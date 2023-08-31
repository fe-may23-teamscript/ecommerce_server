import { Router } from 'express';
import { phonesController } from '../controllers/phones';

export const phonesRouter = Router();

phonesRouter.get('/', phonesController.getAll);
phonesRouter.get('/ten-with-disc', phonesController.getTenWithDisc);
