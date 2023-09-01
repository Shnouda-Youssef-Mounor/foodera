import React from "react";
import { Link } from "react-scroll";
const CheckOut=()=>{
    const style={
        backgroundColor:"black",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer",
        textDecoration:"none",
        padding:"5px"
        
    }
    return<>
    <h1 className="font fs-1 fw-bolder">Successful</h1>
    <Link style={style} to="Explore_Foods">Continue Shopping</Link>
    </>
}
export default CheckOut