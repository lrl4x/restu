import UserModel from "../Models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import CartModel from '../Models/Cart.js'



export const registerUser = async (req, res) => {
    const { Firstname, Lastname, Email, Zip, PhoneNumber, Password, ConfirmPassword, Birthday } = req.body
    const user = new UserModel(
        {
            Firstname,
            Lastname,
            Email,
            Zip,
            PhoneNumber,
            Password: bcrypt.hashSync(Password, bcrypt.genSaltSync()),
            ConfirmPassword: bcrypt.hashSync(Password, bcrypt.genSaltSync()),
            Birthday

        }
    )

    try {
        const olduser = await UserModel.findOne({ Firstname })
        if (olduser) {
            return res.status(400).json({ message: 'user is already exists' })
        }
        await user.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }

}

export const Login = async (req, res) => {
    const { Email, Password } = req.body
    try {
        const User = await UserModel.findOne({ Email })
        const comparepass = await bcrypt.compare(Password, User.Password)

        if (comparepass) {
            const token = jwt.sign({ id: User._id }, process.env.SECRET, { expiresIn: "1h" })
            res.status(200).json({ token, UserID: User._id })
            // res.redierct('ظ')

        } else {
            res.status(201).json({ message: "Email or Password wrong" })
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



// export const getUser = async (req, res) => {
//     // const {Firstname}=req.body
//     try {
//         const user =await UserModel.find({})
//         res.status(200).json(user)
//     } catch (error) {
//         res.status(500).json(error)
//     }

// }   


export const AddToCart = async (req, res) => {
  const { selectedSize, selectedBox, selectedSide, selectedBeverage } = req.body;
  const { userId, itemId } = req.params; 
  
  try {
    const existingUser = await UserModel.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new cart item associated with the user
    const cartItem = new CartModel({
      
      quantity: 1,
      selectedSize,
      selectedBox,
      selectedSide,
      selectedBeverage,
    });

    existingUser.Cart.push(cartItem); 
    await existingUser.save();

    res.json({
      message: 'Item added to cart successfully',
      selectedSize,
      selectedBox,
      selectedSide,
      selectedBeverage,
    });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};