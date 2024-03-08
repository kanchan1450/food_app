import { useContext } from "react";
import UserContext from "../utils/UserContext";
import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor called");
    }

    componentDidMount(){
        // console.log("parent component did mount")
    }
    
    render(){

        // console.log("parent render called");
        return(

            <div className="flex flex-col text-center justify-center w-[50%] m-auto">
                <h1 className="mt-2">About Us</h1>
                <h2>This is about us page</h2>
                <UserClass name = {"class1"} location = {"Noida, Uttar Pradesh"}></UserClass>
                
            </div>
        )
    }
}

export default AboutUs;