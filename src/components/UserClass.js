import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo : 
            {
                name : "Dummy name",
                location: "Dummy location",
                avatar_url: "dummy url"
                

            }
        }
            
        // console.log(this.props.name + "Child constructor called");
            

        
    }

    async componentDidMount(){
        // console.log(this.props.name +"child component did mount");
        const data = await fetch(" https://api.github.com/users/kanchan1450");
        const json = await data.json();
        this.setState(
            {
                userInfo : json
            }
        )

    }

    componentDidUpdate(){
        // console.log("componentdid update");
    }

    componentWillUnmount(){
        // console.log("component will unmount");
    }

    render(){
        // destructuring of props in class base component:
        // console.log(this.props.name +"child render called");
        const{name, location,avatar_url} = this.state.userInfo;
        // destructuring of state variable 
        const{count} = this.state

        
        return(
            <div className="flex flex-col text-center w-[30%] my-10 m-auto justify-center border rounded-lg shadow-md border-black">
                <h1 className="p-2">Name: {name}</h1>
                <div className="flex justify-center"><img src={avatar_url} className="rounded-full border border-green-200 w-[50%]"></img></div>
                <h2 className="my-2">Location: {location}</h2>


                {/* <div> */}

                    {/* we update state varibale in class base component by using the setState see the example of button here */}
                {/* <button className = "border border-black shadow-md rounded-md cursor-pointer my-2 p-1 bg-slate-100"onClick={() =>{this.setState({
                     count : this.state.count+1
                })}}>count : {count}</button> */}

                {/* </div> */}
            </div>
        )
    }

};
export default UserClass;