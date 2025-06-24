import { Component } from "react";
class UserClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Default Location",
                avatar_url: "https://lfas",
            }
        };
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/RehanYusuf');
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

    }


    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className = "user-card">
                <img src={avatar_url} />
               <h2>Name: {name}</h2>
               <h2>Location: {location}</h2>
               
            </div>
        )
    }
}
export default UserClass;