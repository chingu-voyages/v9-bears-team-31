/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import Taxi from '../model/taxi';
import responses from '../helper/responses';

export const createTaxi = async (req, res) => {
  try {
    const taxi = await Taxi.create(req.body);
    if (!taxi) {
      return res.status(400).send(responses.error(400, 'Taxi not created'));
    }
    return res.status(201).send(responses.success(201, 'Taxi created Successfully', taxi));
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Taxi not created'));
  }
};

export const findATaxi = async (req, res) => {
  try {
    const { id } = req.params;
    const taxi = await Taxi.findById(id);
    if (!taxi) {
      return res.status(400).send(responses.error(400, 'Taxi not found'));
    }
    return res.status(200).send(responses.success(200, 'Taxi retrieved Successfully', taxi));
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Internal server error, taxi could not be found'));
  }
};

export const findAllTaxi = async (req, res) => {
  try {
    const taxis = await Taxi.find({});
    if (!taxis || taxis.length === 0) {
      return res.status(400).send(responses.error(400, 'Taxis not found'));
    }
    return res.status(200).send(responses.success(200, 'Taxis retrieved Successfully', taxis));
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Internal server error, taxis could not be found'));
  }
};