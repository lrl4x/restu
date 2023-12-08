import express from 'express'
import core from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import AuthRoute from './Routes/AuthRoutes.js'
import FoodRoute from './Routes/FoodRoutes.js'
import PlaceRoute from './Routes/PlaceRoutes.js'
import CartRoutes from './Routes/CartRoutes.js'
const app= express()


app.use(core())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

mongoose
.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(app.listen(process.env.PORT,()=>{
    console.log(`app running on port ${process.env.PORT}`)
})
).catch((error) =>console.log(error));

//routes
app.use('/account',AuthRoute)
app.use('/Food',FoodRoute)
app.use('/Places',PlaceRoute)
app.use('/Cart',CartRoutes)