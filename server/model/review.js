import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;
const reviewSchema = new Schema({
  userPhoneNumber: {
    type: String,
  },
  taxiPlateNumber: {
    type: String,
  },
  userReview: {
    type: Number,
    required: true,
  },
  userComment: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Review', reviewSchema);
