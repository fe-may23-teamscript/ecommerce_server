import { Router } from 'express';
import { phonesController } from '../controllers/phones';

const phonesRouter = Router();

phonesRouter.get('/', phonesController.getAll);
phonesRouter.get('/twelve-with-disc', phonesController.getTwelveWithDisc);
phonesRouter.get('/last-year-phones', phonesController.getLastYearPhones);
phonesRouter.get('/:id', phonesController.getOnePhone);

export default phonesRouter;
