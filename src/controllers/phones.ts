import { phonesServices } from '../services/phones';
import { ControllerAction } from '../types/ControllerAction';

const getAll: ControllerAction = async (req, res) => {
  const { offset = '0', limit = '12', order = '' } = req.query;

  const orderByAll =
    order &&
    (order as string)
      .split(',')
      .map((i) => i.split(':') as [string, 'DESC' | 'ASC']);

  const phones = await phonesServices.getAll({
    offset: +offset,
    limit: +limit,
    order: orderByAll || undefined,
  });

  res.send(phones);
};

const getTwelveWithDisc: ControllerAction = async (req, res) => {
  const phones = await phonesServices.getTwelveWithDisc();

  res.send(phones);
};

const getLastYearPhones: ControllerAction = async (req, res) => {
  const phones = await phonesServices.getLastYearPhones();

  res.send(phones);
};

const getOnePhone: ControllerAction = async (req, res) => {
  const phoneId = +req.params.id || req.params.id;
  const phone = await phonesServices.getPhoneById(phoneId);

  if (phone === null) {
    res.sendStatus(404);

    return;
  }

  res.send(phone);
};

export const phonesController = {
  getAll,
  getTwelveWithDisc,
  getLastYearPhones,
  getOnePhone,
};
