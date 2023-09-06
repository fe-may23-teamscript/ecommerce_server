import createHttpError from 'http-errors';
import { productServices } from '../services/product';
import { ControllerAction } from '../types/ControllerAction';

const { NotFound } = createHttpError;

const getAll: ControllerAction = async (req, res, next) => {
  const {
    offset = '0',
    limit = '12',
    order = '',
    productType = '',
    searchQuery = '',
  } = req.query;

  const orderByAll =
    order &&
    (order as string)
      .split(',')
      .map((i) => i.split(':') as [string, 'DESC' | 'ASC']);

  try {
    const products = await productServices.getAll({
      offset: +offset,
      limit: +limit,
      order: orderByAll || undefined,
      productType: productType as string,
      searchQuery: searchQuery as string,
    });

    res.send(products);
  } catch (error) {
    next(error);
  }
};

const getDiscounted: ControllerAction = async (req, res, next) => {
  try {
    const products = await productServices.getDiscounted();

    res.send(products);
  } catch (error) {
    next(error);
  }
};

const getNew: ControllerAction = async (req, res, next) => {
  try {
    const products = await productServices.getNew();

    res.send(products);
  } catch (error) {
    next(error);
  }
};

const getProductById: ControllerAction = async (req, res, next) => {
  const productId = +req.params.id || req.params.id;

  try {
    const product = await productServices.getProductById(productId);

    if (!product) {
      next(new NotFound('Product not found'));

      return;
    }

    res.send(product);
  } catch (error) {
    next(error);
  }
};

const getRecommended: ControllerAction = async (req, res, next) => {
  const productId = +req.params.id || req.params.id;

  try {
    const products = await productServices.getRecommended(productId);

    res.send(products);
  } catch (error) {
    next(error);
  }
};

export const productController = {
  getAll,
  getDiscounted,
  getNew,
  getProductById,
  getRecommended,
};
