import React from "react";
import { FacebookIcon,LinkedinIcon,WhatsappIcon,EmailIcon } from "react-share";
import './footer.css' 
const Footer = ()=>{
    return(
        <div className="footer">
            <label>By Shnouda Youssef</label>
            <icons className="icons">
                <a href="https://www.facebook.com/shnouda.youssef.3" target="_blank"  rel="noreferrer">
                <FacebookIcon size={32} round={true} className="ms-lg-3 me-lg-3" />
                </a>
                <a href="https://wa.me/+2001277025404" target="_blank"  rel="noreferrer">    
            <WhatsappIcon size={32} round={true} className="me-lg-3"/>
            </a>
            <a href="https://www.linkedin.com/in/shnouda-youssef-287981263"target="_blank"  rel="noreferrer">
            <LinkedinIcon size={32} round={true} className="me-lg-3"/>
            </a>
            <a href="mailto:shnoudayoussef7@gmail.com"target="_blank"  rel="noreferrer">
            <EmailIcon size={32} round={true} className="me-lg-3"/>
            </a>
            </icons>
        </div>
    )

}

export default Footer