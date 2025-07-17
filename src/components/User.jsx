import React, { useEffect } from 'react'
import { useState } from 'react';
const User = (props) => {
    const {name,location,contact} = props;
    const [count,setCount] = useState(0);
    const clickit = () => {
      setCount(count+1);
    }
   
    useEffect(()=>{
      functioning()
    },[])

    const functioning = async () => {
      const data = await fetch('https://api.github.com/users/Sreenivasulu-Kalluru');
      const json = await data.json();
      // console.log(json);
  }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={clickit}>click</button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact}</h2>
    </div>
  )
}

export default User;