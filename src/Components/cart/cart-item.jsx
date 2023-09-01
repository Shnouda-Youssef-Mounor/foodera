import React,{useContext} from "react";
import { FoodContext } from "../../context/food-context";
export const CartItem=(props)=>{
    const{id,src ,title,price,prevPrice}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(FoodContext)
    return(
        <div className="cartItem">
        <img src={src} alt="productImage" />
           <div className="fs-6  fw-bold">
        
            {title}
      
           </div>
           <label className="fs-5 fw-bolder text-danger">${price} <label className="text-decoration-line-through text-dark">{prevPrice}</label> </label>
    <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>

        </div>
    );
}