import mongoose from "mongoose";

const Placeschema=mongoose.Schema({
    img:{
        type:String
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    zipcode:{
        type:String
    },
    
})

const PlaceModel=mongoose.model('Places',Placeschema)

export default PlaceModel;