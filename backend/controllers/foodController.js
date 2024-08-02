import { foodModel } from "../models/foodModel.js";       //! SCHEMA defined
import fs from 'fs'

// add foodItem
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`     //! get the image name
  const food = new foodModel({                    //* reading data from the request.body object
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  })
  try {
    await food.save()                             //* save the data in the database
    res.json({ success: true, message: "Food added" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error })
  }
}

// remove foodItem
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id)          //! find the requested foodID from the database
    fs.unlink(`uploads/${food.image}`, () => { })               //* unlink the image from the folder
    await foodModel.findByIdAndDelete(req.body.id)              //* delete the object from the database
    res.json({ success: true, message: "Food item removed" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error })
  }
}

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({})            //! get all the data from the database
    res.json({ success: true, data: foods })          //* print all foodItem objects
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error })
  }
}

export { addFood, listFood, removeFood }