import React from "react";
import './home.css'
const Home=()=>{
 return(
   <div className="home m-0">
    <div className="contentHome">
 <h1 className="font mt-sm-2 ms-5 fs-1">
    Good food choices are good investments.
    </h1>
    <p className="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
    </p>
    <div className="buttons d-lg-inline-flex ">
   <a href="#Explore_Foods" className="nav-link me-lg-3 h-25" id="tel">Order Now</a>
   <a href="#about" className="nav-link me-lg-3 h-25" id="untel">Learn More</a>

   </div>
    </div>
   
   </div> 
 )
}
export default Home