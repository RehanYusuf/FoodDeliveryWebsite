import React, { useEffect,useState, useContext } from 'react'
import Shimmer from './Shimmer';
import {MENU_API} from "../utils/constants"
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import UserContext from '../utils/UserContext';

const RestaurantMenu = () => {
    
    // const [reflect,setReflect] = useState(null);

    const {resId} = useParams();

    // custom Hook
    const resInfo = useRestaurantMenu(resId);


    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async() => {
    //     const rup = await fetch(MENU_API + resId);
    //     const json = await rup.json();
    //     setReflect(json.data);
        
    // }


    // const [showIndex, setShowIndex] = useState(null);

    // const dummy = useContext(UserContext);

    if(resInfo === null) return <Shimmer/> ;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");





    
    return  (
        <div className='text-center'>

            <h1 className='font-bold my-6 text-2xl'>{name}</h1>

            <p className='font-bold text-lg'>
               {cuisines.join(',')}{costForTwoMessage}
            </p>


            {categories.map((category,index) => 
            <RestaurantCategory key={category?.card?.card?.title} 
            data={category?.card?.card} 
            // display={index === showIndex ? true : false}
            // setShowIndex = {() => setShowIndex(index)}
            />
            
            )}
            
            
        </div>
    )
}

export default RestaurantMenu