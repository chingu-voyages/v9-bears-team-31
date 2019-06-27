import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;
const taxiSchema = new Schema({
  tags: [{
    type: String,
  }],
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
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Taxi', taxiSchema);
