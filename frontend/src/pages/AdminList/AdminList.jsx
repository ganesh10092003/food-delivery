import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AdminList = ({ url }) => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }
  useEffect(() => { fetchList() }, [])
  return (
    <div className='admin-list flex flex-col gap-5 w-[70%] ml-custom-marginLeft mt-[50px] text-[#6d6d6d] text-base'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-[#cacaca] text-base bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-[#cacaca] '>
              <img className='w-[50px]' src={`${url}/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Rs {item.price}</p>
              <p onClick={() => { removeFood(item._id) }} className='cursor-pointer'>x</p>

            </div>
          )
        })}
      </div>
    </div >
  )
}

export default AdminList
