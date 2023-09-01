import React from "react";
import './ourFoods.css'
import OurFoodss from "./foods";
import Foods from "../../foods";
const OurFoods=()=>{
   
return(
    <div className="ourFoods">
     <label className="font mt-sm-2 fs-3 text-center">Explore Our Foods</label>
     <p className="description text-center width-desctiption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      <div className="products">
      {Foods.map((item)=>{
            return<OurFoodss data={item}/>
           })}
      </div>
    </div>
)
}
export default OurFoods