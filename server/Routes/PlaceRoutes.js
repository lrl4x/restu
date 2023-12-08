import express  from "express";

import { getplaces ,createplaces} from '../Controllers/PlaceController.js'
const router=express.Router();

router.get('/',getplaces)
router.post('/createplaces',createplaces)
export default router