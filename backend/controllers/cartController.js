import userModel from "../models/userModel.js";
import mongoose from "mongoose";

//add items to users cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.user.id })
    let cart = await userData.cart
    if (cart[req.body.itemId] === undefined) {
      cart[req.body.itemId] = 1
    }
    else {
      cart[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.user.id, { cart })
    return res.json({ success: true, message: "Added to cart" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" })
  }
}

//remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.user.id })
    let cart = await userData.cart
    if (cart[req.body.itemId] !== undefined && cart[req.body.itemId] > 0) {
      cart[req.body.itemId] -= 1
    }
    else {
      return res.json({ success: false, message: "Item not in the Cart" })
    }
    await userModel.findByIdAndUpdate(req.user.id, { cart })
    return res.json({ success: true, message: "Item removed from Cart" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" })
  }
}

//fetch users cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.user.id })
    let cart = await userData.cart
    res.json({ success: true, data: cart })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })
  }
}

export { addToCart, removeFromCart, getCart }