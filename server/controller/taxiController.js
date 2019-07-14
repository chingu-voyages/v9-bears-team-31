/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import Taxi from '../model/taxi';
import Review from '../model/review';
import responses from '../helper/responses';
import validateTaxi from '../helper/validateTaxi';
import {
  dataUri
} from '../middleware/multer';
import {
  uploader
} from '../cloudinaryConfig';
import PaginationService from '../services/PaginationService';

export const createTaxi = async (req, res) => {
  let field = req.body;
  const {
    error
  } = validateTaxi.validateTaxi(field);
  try {
    if (error) {
      return res.status(400).send({
        error: error.details.map(data => data.message).toString()
      });
    }

    let taxi = await Taxi.findOne({
      plateNumber: field.plateNumber
    });
    if (taxi) return res.status(409).send(responses.error(409, `Taxi with plate number ${field.plateNumber} already exists`));

    if (req.file) {
      const file = dataUri(req).content;

      const image = await uploader.upload(file);

      taxi = new Taxi({
        imageURL: image.url,
        imageID: image.public_id,
        plateNumber: field.plateNumber,
        model: field.model,
      });
    } else {
      taxi = new Taxi({
        imageURL: '',
        imageID: '',
        plateNumber: field.plateNumber,
        model: field.model,
      });
    }

    await taxi.save();

    return res.status(201).send(responses.success(201, 'Taxi created Successfully', taxi));
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Taxi not created'));
  }
};

export const findATaxi = async (req, res) => {
  try {
    const {
      plateNumber
    } = req.params;
    let taxi = await Taxi.findOne({
      plateNumber
    });
    if (!taxi) {
      return res.status(404).send(responses.error(404, 'Taxi not found'));
    }
    let review = await Review.find({
      taxiPlateNumber: plateNumber
    });

    let total = 0;
    review.map(data => {
      total = total + data.userReview;
    })
    const average = (total)/(review.length);
    const averageRounded =  Math.ceil(average*2)/2;

    taxi = await Taxi.findOneAndUpdate({plateNumber}, {
      averageReview: averageRounded
      }
    );

    await taxi.save();

    return res.status(200).send({
      'success': true,
      'statusCode': 200,
      taxi,
      review
    });
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Internal server error, taxi could not be found'));
  }
};

export const findAllTaxi = async (req, res) => {
  try {
    const currentpage = req.query.page;
    const perpage = req.query.limit;
    const populateField = "";
    const {
      q,
    } = req.query;
    const search = q === undefined ? {} : {
      $text: {
        $search: `\"${q}\"`
      },
    };
    const criteria = Object.assign({}, {}, search);
    return PaginationService.paginate(
      Taxi,
      res,
      currentpage,
      perpage,
      criteria,
      populateField,
    );
  } catch (error) {
    return res.status(500).send(responses.error(500, 'Internal server error, taxis could not be found'));
  }
};