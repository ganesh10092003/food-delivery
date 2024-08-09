import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing userOrder
const placeOrder = async (req, res) => {
  const userId = req.user.id
  try {
    const newOrder = new orderModel({
      userId: userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    })
    await newOrder.save()
    await userModel.findByIdAndUpdate(userId, { cartData: {} })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

export { placeOrder }