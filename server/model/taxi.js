import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;
const taxiSchema = new Schema({
  taxiImage: {
    type: String,
  },
  plateNumber: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  averageReview: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
});

export default mongoose.model('Taxi', taxiSchema);
