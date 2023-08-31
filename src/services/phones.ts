import { sequelize } from '../sequelize/db';
import { Phone } from '../sequelize/tables/Phone';

const getAll = async ({
  offset,
  limit,
  order,
}: {
  offset: number;
  limit: number;
  order: [string, 'DESC' | 'ASC'][];
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

export const phonesServices = { getAll, getTenWithDisc };
