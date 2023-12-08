import express  from "express";
import {registerUser , Login,AddToCart} from '../Controllers/AuthController.js'


const router=express.Router();

router.post('/register',registerUser)
router.post('/login',Login)
router.post('/:userId/AddToCart/:itemId',AddToCart);


// router.get('/get',getUser)
export default router