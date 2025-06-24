import React, { useState } from 'react'
import { useEffect } from 'react';
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const rup = await fetch(MENU_API + resId);
        const json = await rup.json();
        setResInfo(json.data);
            
    }



    return resInfo;
}

export default useRestaurantMenu