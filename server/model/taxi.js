import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

const {
  Schema,
} = mongoose;
const taxiSchema = new Schema({
  imageURL: {
    type: String,
  },
  imageID: {
    type: String,
  },
  plateNumber: {
    type: String,
    required: true,
    es_indexed:true
  },
  model: {
    type: String,
    required: true,
  },
  averageReview: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

export default mongoose.model('Taxi', taxiSchema.plugin(mongoosastic));
