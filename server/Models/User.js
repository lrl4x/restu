import mongoose from "mongoose";

const Userschema = mongoose.Schema({
  Firstname: {
    type: String,
    // required: true
  },
  Lastname: {
    type: String,
    // required: true
  },
  Email: {
    type: String,
    // required: true
  },
  Zip: {
    type: String,
    // required: true
  },
  PhoneNumber: {
    type: String,
    // required: true
  },
  Password: {
    type: String,
    // required: true
  },
  ConfirmPassword: {
    type: String,
    // required: true
  },
  Birthday: {
    type: String,
    // required: true
  },
  
  Cart: []
},
{
  timestamps: true,
});

const UserModel = mongoose.model('users', Userschema);

export default UserModel;