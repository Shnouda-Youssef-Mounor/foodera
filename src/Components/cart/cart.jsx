import React, { useContext } from "react";
import { FoodContext } from "../../context/food-context";
import Foods  from "../../foods";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom"; 
import "./cart.css"
import { Link } from "react-scroll";


const Cart=()=>{
    const { cartItems, getTotalCartAmount, checkout } = useContext(FoodContext);
    const totalAmount = getTotalCartAmount();
  
    const navigate = useNavigate();
    return(
        <div>
             <div className="cart">
             {Foods.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          else{
            return <></>
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout m-4">
          <p className="font"> Subtotal: ${totalAmount} </p>
          <Link to="Explore_Foods" id="tel" className="w-100 ms-lg-1 btn me-2"> Continue Shopping </Link>
          <button id="untel" className="w-100 btn"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="empty"> Your Shopping Cart is Empty</div>
      )}
         </div>
        
    ); 
}
export default Cart