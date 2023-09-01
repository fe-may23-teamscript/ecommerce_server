import { sequelize } from '../sequelize/db';
import { Phone } from '../sequelize/tables/Phone';

const getAll = async ({
  offset,
  limit,
  order,
}: {
  offset: number;
  limit: number;
  order: [string, 'DESC' | 'ASC'][] | undefined;
}) => {
  const phones = await Phone.findAndCountAll({
    limit,
    offset,
    order,
  });

  return phones;
};

const getTenWithDisc = async () => {
  const [results] = await sequelize.query(
    'SELECT *, (full_price - price) as discount from phones ORDER BY discount DESC limit 10',
  );

  return results;
};

const getLastYearPhones = async () => {
  const [results] = await sequelize.query(
    'SELECT * from phones WHERE YEAR = 2019',
  );

  return results;
};

export const phonesServices = { getAll, getTenWithDisc, getLastYearPhones };
