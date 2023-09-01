import { phonesServices } from '../services/phones';
import { ControllerAction } from '../types/ControllerAction';

const getAll: ControllerAction = async (req, res) => {
  const { offset = '0', limit = '10', order = '' } = req.query;

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

const getTenWithDisc: ControllerAction = async (req, res) => {
  const phones = await phonesServices.getTenWithDisc();

  res.send(phones);
};

const getLastYearPhones: ControllerAction = async (req, res) => {
  const phones = await phonesServices.getLastYearPhones();

  res.send(phones);
};

const getOnePhone: ControllerAction = async (req, res) => {
  const phoneId = req.params.id;
  const phone = await phonesServices.getPhoneById(phoneId);

  res.send(phone);
};

export const phonesController = {
  getAll,
  getTenWithDisc,
  getLastYearPhones,
  getOnePhone,
};
