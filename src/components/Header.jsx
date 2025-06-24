import React from 'react'
import {IMAGE_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btn,setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();


    const clicking = () => {
        (btn === "Login") ? setBtn("Logout") : setBtn("Login")   ;
    }

    
    return(
        <div className='flex justify-between bg-green-200 items-center'>

            <div className="logo-container">
                <img className= 'h-[100px] w-[140px]' src={IMAGE_URL}/>
            </div>

            <div className="nav-items">
                <ul className='flex p-4 m-4 gap-4'>
                    <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About-Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Help</Link></li>
                    <li><Link>Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login" onClick={clicking}>{btn}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header