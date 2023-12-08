import PlaceModel from '../Models/Places.js';


export const getplaces =async(req,res)=>{
    try {
        const get=await PlaceModel.find()    
        res.status(200).json(get)
    } catch (error) {
        console.log(error)
    }
}

export const createplaces =async(req,res)=>{
    const {img,country,city,zipcodee}=req.body
    const create=new PlaceModel(req.body)
    try {
        await create.save()
        res.status(200).json({message:"completed"})
    } catch (error) {
        console.log({message:error.message})
    }
}
