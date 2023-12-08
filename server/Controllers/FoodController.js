import FoodModel from '../Models/Food.js'

export const CreateMeals = async (req, res) => {
  const { name, details, cals } = req.body
  const food = new FoodModel(req.body)
  try {

    await food.save()
    res.status(200).json({ message: "completed" })
  } catch (error) {
    console.log(error)
  }


}

export const getFood = (category) => {

  return res.json({ category })
}



export const getmenu = async (req, res) => {
  try {
    const get = await FoodModel.find()
    res.status(200).json(get)
  } catch (error) {
    console.log(error)
  }


}

export const details = async (req, res) => {
  const id = req.params.id;
  await FoodModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err))




}

export const title = (req, res) => {
  const { category } = req.params;
  return res.json({ category })
}


export const getFoodByCategory = async (req, res) => {
  try {
    const { category } = req.params;// You can change this to other categories
    const foodItems = await FoodModel.find({ category: category });
    res.status(200).json(foodItems)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching food items by category" });
  }
};

// export const AddToCart = async (req, res) => {
//   const { selectedSize, selectedBox, selectedSide, selectedBeverage } = req.body;
//   const { userId, itemId } = req.params;

//   try {
//       // Find the user by userId
//       const user = await UserModel.findById(userId);

//       if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//       }

//       // Check if the user has a cart; if not, create it
//       if (!user.Cart) {
//           user.Cart = [];
//       }

//       const existingCartItem = user.Cart.find((cartItem) => cartItem.itemId === itemId);

//       if (existingCartItem) {
//           existingCartItem.quantity += 1;
//       } else {
//           user.Cart.push({
//               itemId,
//               quantity: 1,
//               selectedSize,
//               selectedBox,
//               selectedSide,
//               selectedBeverage,
//           });
//       }

//       await user.save();
//       res.json({
//           message: 'Item added to cart successfully',
//           selectedSize,
//           selectedBox,
//           selectedSide,
//           selectedBeverage,
//       });
//   } catch (error) {
//       console.error('Error adding item to cart:', error);
//       res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };