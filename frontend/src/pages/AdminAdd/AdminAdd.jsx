import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'

const AdminAdd = () => {
  const url = "http://localhost:5000"
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })
  const onChangeHandle = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData((prev) => ({ ...prev, [name]: value }))
  }
  useEffect(() => { console.log(data); }, [data])
  const onSubmitHandle = async (event) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false)
    }
    else {

    }
  }

  return (
    <div className='admin-add w-[70%] ml-custom-marginLeft mt-[50px] text-[#6d6d6d] text-base'>
      <form onSubmit={onSubmitHandle} className='flex flex-col gap-5 '>
        <div className="add-image-upload flex flex-col gap-5">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className='w-[120px] mt-[-15px]' src={image ? URL.createObjectURL(image) : assets.admin_upload_area} alt="" />
          </label>
          <input onChange={(event) => { setImage(event.target.files[0]) }} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name w-custom-adminFormWidth  flex flex-col gap-5">
          <p>Product Name</p>
          <input onChange={onChangeHandle} value={data.name} className='p-[10px] border-[1px] border-[#6d6d6d] rounded-[5px] mt-[-20px]' type="text" name='name' placeholder='Type here' required />
        </div>
        <div className="add-product-desc w-custom-adminFormWidth  flex flex-col gap-5">
          <p>Product Description</p>
          <textarea onChange={onChangeHandle} value={data.description} className='p-[10px] border-[1px] border-[#6d6d6d] rounded-[5px] mt-[-20px]' name="description" rows='6' placeholder='Write content here' required />
        </div>
        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flex flex-col gap-5" >
            <p>Product Category</p>
            <select onChange={onChangeHandle} className='max-w-[120px] p-[10px] border-[1px] border-[#6d6d6d] rounded-[5px] mt-[-20px]' name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex flex-col gap-5">
            <p>Product Price</p>
            <input required onChange={onChangeHandle} value={data.price} className='max-w-[120px] p-[10px] border-[1px] border-[#6d6d6d] rounded-[5px] mt-[-20px]' type="number" name='price' placeholder='Rs 80' />
          </div>
        </div>
        <button type='submit' className='add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer'>Add</button>
      </form>
    </div>
  )
}

export default AdminAdd
