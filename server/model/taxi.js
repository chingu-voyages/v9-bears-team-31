import mongoose from 'mongoose';
import mexp from 'mongoose-elasticsearch-xp';
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
    es_indexed: true,
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

taxiSchema.index({
  "$**": "text"
});
export default mongoose.model('Taxi', taxiSchema);
