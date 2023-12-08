import express  from "express";
import { CreateMeals, details, getFood,getFoodByCategory,getmenu, title} from "../Controllers/FoodController.js";

const router=express.Router();

router.post('/createmeals',CreateMeals);
// router.get("`${title}`",getFood)
router.get("/kidmeals",getFoodByCategory)
router.get("/details/:id",details)
router.get("/category/:category", getFoodByCategory); 
// router.post('/add-to-cart/:itemId/:userId',AddToCart)

export default router