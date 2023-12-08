import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
   quantity: {
    type: Number,
    // required: true,
    default: 0,
  },
  selectedSize: String,
  selectedBox: String,
  selectedSide: String,
  selectedBeverage: String,
  });
  
  const CartModel = mongoose.model('Cart', CartSchema);
  export default CartModel;