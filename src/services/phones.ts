import { Op } from 'sequelize';
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

const getRecommended = async (deviceId: number | string) => {
  const device = await getPhoneById(deviceId);

  const priceDiscount = device?.priceDiscount || 0;

  const devicesLowerPrice = await Phone.findAll({
    limit: 12,
    order: [['priceDiscount', 'DESC']],
    where: {
      priceDiscount: { [Op.lte]: priceDiscount },
    },
  });

  const devicesHigherPrice = await Phone.findAll({
    limit: 12,
    order: [['priceDiscount', 'ASC']],
    where: {
      priceDiscount: { [Op.gt]: priceDiscount },
    },
  });

  const devices = [];

  for (let i = 0; i <= 12; i++) {
    if (devicesLowerPrice[i]) {
      devices.push(devicesLowerPrice[i]);
    }

    if (devicesHigherPrice[i]) {
      devices.push(devicesHigherPrice[i]);
    }

    if (devices.length === 12) break;
  }

  return devices.sort(
    (device1, device2) => device1.priceDiscount - device2.priceDiscount,
  );
};

export const phonesServices = {
  getAll,
  getTwelveWithDisc,
  getLastYearPhones,
  getPhoneById,
  getRecommended,
};
