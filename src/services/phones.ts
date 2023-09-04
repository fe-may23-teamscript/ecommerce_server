import { Phone } from '../models/Phone';
import { sequelize } from '../sequelize/db';

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

const getTwelveWithDisc = async () => {
  const [results] = await sequelize.query(
    'SELECT *, ("priceRegular" - "priceDiscount") as discount from phones ORDER BY discount DESC limit 12',
  );

  return results;
};

const getLastYearPhones = async () => {
  const [results] = await sequelize.query(
    'SELECT * from phones WHERE YEAR = 2019',
  );

  return results;
};

const getPhoneById = async (phoneId: number | string) => {
  if (typeof phoneId === 'number') {
    const phone = await Phone.findByPk(phoneId);

    return phone;
  }

  const phone = await Phone.findOne({
    where: {
      slug: phoneId,
    },
  });

  return phone;
};

export const phonesServices = {
  getAll,
  getTwelveWithDisc,
  getLastYearPhones,
  getPhoneById,
};
