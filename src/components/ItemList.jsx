import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem,removeItem } from "../utils/Slice";
import React from "react";
const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
         dispatch(addItem(item));
    }
    const removeIt = ()=>{
         dispatch(removeItem());
    }

    return (
    <div>
        {items.map((item) => (
            <div key={item?.card?.info?.id}
            className="p-2 m-2 border border-black border-b-2 text-left flex justify-between"
            >
                
                {/* left */}
                <div className="w-9/12 flex flex-col justify-between">
                    <div className="py-2">
                      <span className="font-bold">{item?.card?.info?.name}</span>
                    </div>

                    <p className="text-xs">{item?.card?.info?.description}</p>
                    
                    <span className="font-bold">₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                </div>

                {/* right */}
                <div className="w-3/12">

                    <div className="absolute mx-0 ">
                        <button className="text-white bg-black opacity-85 rounded-lg p-2 hover:text-black hover:bg-white transition-all" onClick={() => handleAddItem(item)}>
                            Add+
                        </button>   
                    </div>

                    <img src={CDN_URL + item?.card?.info?.imageId} className="w-full font-bold"/>

                    <div className="absolute my-[-40px] mx-0">
                         <button className="text-white bg-black opacity-85 rounded-lg p-2 hover:text-black hover:bg-white transition-all" onClick={removeIt}>
                            Remove
                        </button>
                    </div>
                    
                </div>
                
                
            </div>
        ))}
    </div>
    )
}

export default ItemList;

