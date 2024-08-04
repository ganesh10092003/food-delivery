import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({})
  const backendURL = 'http://localhost:5000'
  const [token, setToken] = useState("")
  const [food_list, setFoodList] = useState([])


  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => (product._id === item))
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const fetchFoodList = async () => {
    const response = await axios.get(backendURL + '/api/food/list')
    setFoodList(response.data.data)
  }

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList()
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
      }
    }
    loadData()
  }, [])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    backendURL,
    token,
    setToken
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider