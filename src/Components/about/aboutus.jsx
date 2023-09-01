import React from "react";
import './about.css'
import aboutImg from '../../Assets/About us/2.png'
import { Link } from "react-scroll";
const Aboutus=()=>{
    return(
        <div className="pageAbout">
     <div className="contentHome contentAbout me-lg-5">
         <font className="font mt-sm-2 fs-3 w-100">We make everything by hand with the best possible ingredients.</font>
         <p className="description">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
         </p>
         <div className="correct">
          <label htmlFor="1" className="correctSign">&#10004;</label>
          <p className="description fw-bold ">Etiam sed dolor ac diam volutpat.</p>
          <label htmlFor="1" className="correctSign">&#10004;</label>
          <p className="description fw-bold ">Erat volutpat aliquet imperdiet.</p>
          <label htmlFor="1" className="correctSign">&#10004;</label>
          <p className="description fw-bold ">purus a odio finibus bibendum.</p>
          </div>
         <div className="button">
        <Link to="about" className="nav-link h-100" id="tel">Learn More</Link>
         </div>
     </div>
     <img src={aboutImg}  alt="aboutImage" className="img" id="img"/>
        </div>
    )
}
export default Aboutus