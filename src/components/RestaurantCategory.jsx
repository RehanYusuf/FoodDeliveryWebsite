import { useState } from "react";
import ItemList from "./ItemList";
import React from "react";
const RestaurantCategory = ({data})=>{

    const [display, setDisplay]  = useState(false);
    const handleClick = () => {
        //  console.log("Clicked!!") 
        // setShowIndex();
        setDisplay(!display);
    }

    return(
        

        <div>

            <div className="bg-gray-100 my-2 p-4 w-1/2 shadow-lg mx-auto">
             
                <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                    <span>{data.title}({data.itemCards.length})</span>
                    {display ? <span>⬆️</span> : <span>⬇️</span>}
                </div>

                {display ? <ItemList items = {data.itemCards}/> : ""}
                
            </div>

            

        </div>
    )
}

export default RestaurantCategory;