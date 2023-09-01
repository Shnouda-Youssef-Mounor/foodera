import React from "react";
import './about.css'
import aboutImg from '../../Assets/About us/1.jpg'
import { Link } from "react-scroll";
const About =()=>{
return(
    <div className="pageAbout">
     <img src={aboutImg}  alt="aboutImage" className="img"/>
     <div className="contentHome contentAbout">
         <font className="font mt-sm-2 fs-3 w-100">We pride ourselves on making real food from the best ingredients.</font>
         <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
         </p>
         <div className="buttons">
        <Link to="about" className="nav-link h-100" id="tel">Learn More</Link>
         </div>
     </div>
     
    </div>
)
}
export default About