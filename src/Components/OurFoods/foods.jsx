import React from "react";
import { FoodContext } from "../../context/food-context";
import './ourFoods.css'
import { useContext } from "react";
const OurFoodss=(props)=>{
    
    const {id ,src ,title,time,serves,price,prevPrice}=props.data

    const { addToCart, cartItems } = useContext(FoodContext);
    
    const cartItemCount = cartItems[id];

    return(
        <div className="product">
                    <div className="image-container">
                    <img src={src} alt="img" className="w-100 product-photo" />
                    </div>
                    <label className="fs-5 fw-bold">{title}</label>
                    <label className="fs-5">Time : {time} | Serves : {serves}</label>
                    <label className="fs-5 fw-bolder text-danger">${price} <label className="text-decoration-line-through text-dark">{prevPrice}</label> </label>
                    <hr/>
                    <button  onClick={() => addToCart(id)} className="nav-link me-lg-3 mb-lg-3 hight-btn" id="tel w-btn">Add Product {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
        </div>
    )
    

}
export default OurFoodss;