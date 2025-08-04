import React from 'react'
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from './Card';
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
import { isOpen } from './Card';
const Body = () => {


    let [vari,setVari] = useState([]);
    let [newFilter,setNewfilter] = useState([]);
    const [searchText, setSearchText] = useState("");

    const CardisOpen = isOpen(Card);

    const clickFunction = () => {
        newFilter = newFilter.filter((el)=> el.avgRating >= 4.5);
        setNewfilter(newFilter);
    }

    

    const searchFunction = () => {
        const filtered = vari.filter((el)=> el.name.toLowerCase().includes(searchText.toLowerCase()));
        setNewfilter(filtered);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const vali = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8865508&lng=80.97122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await vali.json();
        
        let arr = [];
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map((el) => arr.push(el.info))
        setVari(arr);
        setNewfilter(arr);

    }


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks Like you are offline!!</h1>
    }


    if(vari.length === 0){
        return <Shimmer />
    }

   
    return (
      <div className="body">
        <div className="filter flex">

          <div className="m-4 p-3">
            

              <input
                type="text"
                className="border border-solid border-black h-8"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />

              <button
                className="p-2 m-4 bg-green-400 hover:bg-green-300 hover:text-white rounded-lg"
                onClick={searchFunction}
              >
                Click
              </button>

            

            <button
              onClick={clickFunction}
              className="bg-yellow-400 p-2 hover:bg-yellow-300 rounded-lg hover:text-white "
            >
              4.5 Star
            </button>
          </div>
        </div>

        <div className="cards-container px-4 flex flex-wrap">
          {newFilter.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              {restaurant.isOpen ? (
                <CardisOpen resData={restaurant} />
              ) : (
                <Card resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Body