import React from "react";
import { FoodContext } from "../../context/food-context";
import './ourFoods.css'
import { useContext } from "react";
const OurFoodss=(props)=>{
    
    const {id ,src ,title,time,serves,price,prevPrice}=props.data

    const { addToCart, cartItems ,remove} = useContext(FoodContext);
    
    let cartItemCount = cartItems[id];
      if(cartItemCount<=0){cartItemCount=0}
    return(
        <div className="product">
                    <div className="image-container">
                    <img src={src} alt="img" className="w-100 product-photo" />
                    </div>
                    <label className="fs-5 fw-bold">{title}</label>
                    <label className="fs-5">Time : {time} | Serves : {serves}</label>
                    <label className="fs-5 fw-bolder text-danger">${price} <label className="text-decoration-line-through text-dark">{prevPrice}</label> </label>
                    <hr/>
                    <div className="d-grid align-items-center align-content-center align-self-center">
                    <button  onClick={() => addToCart(id)} className="nav-link me-lg-3 mb-lg-3 hight-btn w-100" id="untel">Add Product {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
                    {cartItemCount>0 && <button  onClick={() => remove(id)} className="nav-link me-lg-3 mb-lg-3 hight-btn w-100" id="tel">Remove Product  <> ({cartItemCount})</></button>}
                    </div>
                    
        </div>
    )
    

}
export default OurFoodss;