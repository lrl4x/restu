import CartModel from '../Models/Cart.js'

export const AddToCart = async (req, res) => {
    const { selectedSize, selectedBox, selectedSide, selectedBeverage } = req.body;
  
    try {
      // Check if the item is already in the user's cart
      const existingCartItem = await CartModel.findOne({ userId, itemId });
  
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        await existingCartItem.save();
      } else {
        // If the item is not in the cart, create a new cart item
        const cartItem = new CartModel({
          userId,
          itemId,
          quantity: 1,
          selectedSize,
          selectedBox,
          selectedSide,
          selectedBeverage,
        });
        await cartItem.save();
      }
  
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
  