import mongoose from 'mongoose';

const {
  Schema
} = mongoose;
const userSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);