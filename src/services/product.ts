import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { sequelize } from '../sequelize/db';

const getAll = async ({
  offset,
  limit,
  order,
  productType,
}: {
  offset: number;
  limit: number;
  order: [string, 'DESC' | 'ASC'][] | undefined;
  productType: string;
}) => {
  const whereCondition = productType ? { category: productType } : {};

  const products = await Product.findAndCountAll({
    limit,
    offset,
    order,
    where: whereCondition,
  });

  return products;
};

const getDiscounted = async () => {
  const products = await Product.findAll({
    attributes: {
      include: [
        [sequelize.literal('(price_regular - price_discount)'), 'discount'],
      ],
    },
    order: [['discount', 'DESC']],
    limit: 12,
  });

  return products;
};

const getNew = async () => {
  const products = await Product.findAll({
    where: {
      year: 2019,
    },
  });

  return products;
};

const getProductById = async (productId: number | string) => {
  if (typeof productId === 'number') {
    const product = await Product.findByPk(productId);

    return product;
  }

  const product = await Product.findOne({
    where: {
      slug: productId,
    },
  });

  return product;
};

const getRecommended = async (productId: number | string) => {
  const currentProduct = await getProductById(productId);

  if (!currentProduct) {
    return [];
  }

  const currentPrice = currentProduct.priceDiscount;
  const currentId = currentProduct.id;

  const productsCheaperOrEqual = await Product.findAll({
    limit: 12,
    order: [['priceDiscount', 'DESC']],
    where: {
      priceDiscount: { [Op.lte]: currentPrice },
      id: { [Op.not]: currentId },
    },
  });

  const productsMoreExpensive = await Product.findAll({
    limit: 12,
    order: [['priceDiscount', 'ASC']],
    where: {
      priceDiscount: { [Op.gt]: currentPrice },
      id: { [Op.not]: currentId },
    },
  });

  const recommendedProducts = [];

  for (let i = 0; i < 12; i++) {
    if (productsCheaperOrEqual[i]) {
      recommendedProducts.push(productsCheaperOrEqual[i]);
    }

    if (productsMoreExpensive[i]) {
      recommendedProducts.push(productsMoreExpensive[i]);
    }

    if (recommendedProducts.length >= 12) break;
  }

  return recommendedProducts.sort(
    (prod1, prod2) => prod1.priceDiscount - prod2.priceDiscount,
  );
};

export const productServices = {
  getAll,
  getDiscounted,
  getNew,
  getProductById,
  getRecommended,
};
