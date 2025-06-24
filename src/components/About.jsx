import React from 'react'
import User from './User'
import { Component } from 'react'
import UserClass from './UserClass';
class About extends Component{
   constructor(props){
    super(props);
   }
   
   componentDidMount(){
    
   }
   render(){
    return(
      <div>
        <User name = {"First"} location = {"Dehradun"} contact = {899151151}/>
        <UserClass />
      </div>
    )
   }
}

export default About;