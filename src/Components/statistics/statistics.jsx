import React, { useState } from "react";
import './statistics.css'
const Statistics=()=>{
    const[SAVINGS]=useState(1287)
    const[PHOTOS]=useState(5786)
    const[ROCKETS]=useState(1440)
    const[GLOBES]=useState(7110)

return(
    <div className="statistics">
     <div className="item-statistics">
      <font className='fw-bold fs-2'>{SAVINGS}+</font>
      <font className='fw-medium fs-6'>SAVINGS</font>
     </div>
     <div className="item-statistics">
      <font className='fw-bold fs-2'>{PHOTOS}+</font>
      <font className='fw-medium fs-6'>PHOTOS</font>
     </div>
     <div className="item-statistics">
      <font className='fw-bold fs-2'>{ROCKETS}+</font>
      <font className='fw-medium fs-6'>ROCKETS</font>
     </div>
     <div className="item-statistics">
      <font className='fw-bold fs-2'>{GLOBES}+</font>
      <font className='fw-medium fs-6'>GLOBES</font>
     </div>
    </div>
)
}
export default Statistics