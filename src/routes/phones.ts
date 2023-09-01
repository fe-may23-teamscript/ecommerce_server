import { Router } from 'express';
import { phonesController } from '../controllers/phones';

const phonesRouter = Router();

phonesRouter.get('/', phonesController.getAll);
phonesRouter.get('/ten-with-disc', phonesController.getTenWithDisc);
phonesRouter.get('/last-year-phones', phonesController.getLastYearPhones);
phonesRouter.get('/:id', phonesController.getOnePhone);

export default phonesRouter;
