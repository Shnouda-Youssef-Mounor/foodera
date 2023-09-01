import { createContext, useState } from "react";
import Foods from "../foods";
export const FoodContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Foods.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  export const FoodContextProvider = (props) => {
    

    const [cartItems, setCartItems] = useState(getDefaultCart());
  
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = Foods.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    };
  
    const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
  
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
  
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
  
    const checkout = () => {
      setCartItems(getDefaultCart());
    };
  
    const contextValue = {
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      getTotalCartAmount,
      checkout,
    };
  
    return (
      <FoodContext.Provider value={contextValue}>
        {props.children}
      </FoodContext.Provider>
    );
  };