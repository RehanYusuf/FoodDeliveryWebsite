import React from 'react'
import {CDN_URL} from "../utils/constants.js"
const Card = (props) => {
    const {resData}  = props;
    
        const {name,cuisines,avgRating,slaString,cloudinaryImageId} = resData;

        return (
            <div className="m-4 p-4 w-[250px] bg-green-200">
                <img className="card-photo" src={CDN_URL + cloudinaryImageId}></img>
                <h3 className='font-bold'>{name}</h3>
                <h4>{cuisines}</h4>
                <h4>{avgRating}</h4>
                <h4>{slaString}</h4>
            </div>
        )
      
}

// Higher Order Element

export const isOpen = (Card) => {
    return (props) => {
        return(
            <div>
                <label className='text-white bg-black absolute mx-5 my-2 p-2 rounded-lg'>isOpen</label>
                <Card {...props}/>
            </div>
        )
    }
}

export default Card