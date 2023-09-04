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

  if (phones.rows.length === 0) {
    res.status(404).send('Devices not found');

    return;
  }

  res.send(phones);
};

const getTwelveWithDisc: ControllerAction = async (req, res) => {
  const phones = await phonesServices.getTwelveWithDisc();

  if (phones.length === 0) {
    res.status(404).send('Devices not found, please check the request');

    return;
  }

  res.send(phones);
};

const getLastYearPhones: ControllerAction = async (req, res) => {
  const phones = await phonesServices.getLastYearPhones();

  if (phones.length === 0) {
    res.status(404).send('Devices not found, please check the request');

    return;
  }

  res.send(phones);
};

const getOnePhone: ControllerAction = async (req, res) => {
  const phoneId = +req.params.id || req.params.id;
  const phone = await phonesServices.getPhoneById(phoneId);

  if (!phone) {
    res.status(404).send('Device not found, please check the request');

    return;
  }

  res.send(phone);
};

const getRecommendedDevices: ControllerAction = async (req, res) => {
  const phoneId = +req.params.id || req.params.id;

  const devices = await phonesServices.getRecommended(phoneId);

  if (devices.length === 0) {
    res.status(404).send('Devices not found, please check the request');

    return;
  }

  res.send(devices);
};

export const phonesController = {
  getAll,
  getTwelveWithDisc,
  getLastYearPhones,
  getOnePhone,
  getRecommendedDevices,
};
