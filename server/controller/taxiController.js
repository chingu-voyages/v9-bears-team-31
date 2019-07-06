/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import Taxi from '../model/taxi';
import responses from '../helper/responses';
import validateTaxi from '../helper/validateTaxi';

export const createTaxi = async (req, res) => {
  let field = req.body;
  const { error } = validateTaxi.validateTaxi(field);
  try {
    if (error) {
      return res.status(400).send({
        error: error.details.map(data => data.message).toString()
      });
    }
    let taxi = await Taxi.findOne({plateNumber: field.plateNumber});
    if (taxi) return res.status(409).send(responses.error(409, `Taxi with plate number ${field.plateNumber} already exists`));

    taxi = new Taxi({
      imageURL: field.imageURL,
      imageID: field.imageID,
      plateNumber: field.plateNumber,
      model: field.model,
    });

    await taxi.save();
    
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