import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

foodRouter.post('/add', upload.single("image"), addFood)     //* POST method (add data)  //* upload the image in the folder (middleware)
foodRouter.get('/list', listFood)                            //* GET method (print all objects)
foodRouter.post('/remove', removeFood)                       //* POST method (remove data)
export default foodRouter 