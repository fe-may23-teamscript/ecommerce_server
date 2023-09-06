import { productServices } from '../services/product';
import { ControllerAction } from '../types/ControllerAction';

const getAll: ControllerAction = async (req, res) => {
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

  const products = await productServices.getAll({
    offset: +offset,
    limit: +limit,
    order: orderByAll || undefined,
    productType: productType as string,
    searchQuery: searchQuery as string,
  });

  res.send(products);
};

const getDiscounted: ControllerAction = async (req, res) => {
  const products = await productServices.getDiscounted();

  res.send(products);
};

const getNew: ControllerAction = async (req, res) => {
  const products = await productServices.getNew();

  res.send(products);
};

const getProductById: ControllerAction = async (req, res) => {
  const productId = +req.params.id || req.params.id;
  const product = await productServices.getProductById(productId);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res.send(product);
};

const getRecommended: ControllerAction = async (req, res) => {
  const productId = +req.params.id || req.params.id;
  const products = await productServices.getRecommended(productId);

  res.send(products);
};

export const productController = {
  getAll,
  getDiscounted,
  getNew,
  getProductById,
  getRecommended,
};
