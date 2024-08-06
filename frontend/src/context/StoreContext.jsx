import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({})
  const backendURL = 'http://localhost:5000'
  const [token, setToken] = useState("")
  const [food_list, setFoodList] = useState([])


  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    if (token) {
      await axios.post(backendURL + '/api/cart/add', { itemId }, { headers: { 'authorization': token } })
    }
  }
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
      await axios.post(backendURL + '/api/cart/remove', { itemId }, { headers: { 'authorization': token } })
    }
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0
    if (cartItems && Object.keys(cartItems).length > 0) {
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = food_list.find((product) => (product._id === item))
          totalAmount += itemInfo.price * cartItems[item]
        }
      }
    }
    return totalAmount
  }

  const fetchFoodList = async () => {
    const response = await axios.get(backendURL + '/api/food/list')
    setFoodList(response.data.data)
  }

  useEffect(() => {
    const loadMenu = async () => {
      await fetchFoodList()
    }
    loadMenu()
  }, [])

  const loadCartData = async (token) => {
    const response = await axios.post(backendURL + '/api/cart/get', {}, { headers: { 'authorization': token } })
    setCartItems(response.data.data)
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    const loadCart = async () => {
      if (token) {
        await loadCartData(token)
      }
      else {
        setCartItems({})
      }
    }
    loadCart()
  }, [token])

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