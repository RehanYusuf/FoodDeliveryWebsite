import React from 'react'
import {IMAGE_URL} from "../utils/constants"
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import {useSelector} from "react-redux"
const Header = () => {
    const [btn,setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    
    // const dummy = useContext(UserContext);

    const clicking = () => {
        (btn === "Login") ? setBtn("Logout") : setBtn("Login")   ;
    }
    
    
    return(
        <div className='flex justify-between bg-green-200 items-center'>

            <div className="pl-5">
                <img className= 'h-12 w-12' src={IMAGE_URL}/>
            </div>

            <div className="nav-items">
                <ul className='flex p-4 m-4 gap-4 items-center'>
                    <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About-Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Help</Link></li>
                    <li className='font-bold text-lg'><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="bg-yellow-500 p-2 m-2 rounded-lg" onClick={clicking}>{btn}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header