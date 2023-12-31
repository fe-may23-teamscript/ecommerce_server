import { Router } from 'express';
import { productController } from '../controllers/product';

const productRouter = Router();

productRouter.get('/', productController.getAll);
productRouter.get('/discount', productController.getDiscounted);
productRouter.get('/new', productController.getNew);
productRouter.get('/:id', productController.getProductById);
productRouter.get('/:id/recommended', productController.getRecommended);

export default productRouter;
