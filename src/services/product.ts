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
  const [products] = await sequelize.query(
    'SELECT *, (price_regular - price_discount) as discount from products ORDER BY discount DESC limit 12',
  );

  return products;
};

const getNew = async () => {
  const [products] = await sequelize.query(
    'SELECT * from products WHERE year = 2019',
  );

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

export const productServices = {
  getAll,
  getDiscounted,
  getNew,
  getProductById,
};
