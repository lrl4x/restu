import mongoose from 'mongoose';

const FoodSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  cals: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  radioOption: {
    type: String,
    enum: ['option1', 'option2'], 
    default: 'option1',
  },
  checkboxOptions: {
    type: [String],
    enum: ['Lettuce', 'Tomato', 'Double Cheese'], 
    default: [],
  },
  
});

const FoodModel = mongoose.model('Foods', FoodSchema);
export default FoodModel;