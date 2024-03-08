import RestoCard from "./RestoCard";
import { withPromotedLevel } from "./RestoCard";
import {useState, useEffect, useContext} from "react";
import { SWIGGY_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import UseListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const[searchText, setSearchText] =useState("");
    const RestoWithPromoted = withPromotedLevel(RestoCard);
    const{loggedInUser, setUserName} = useContext(UserContext);
    const listOfRestaurant = UseListOfRestaurant();

    console.log(listOfRestaurant);

    useEffect(() => {setFilteredRestaurant(listOfRestaurant);
    }, [listOfRestaurant]);

    const handleClick = () =>{
        console.log(searchText);
        const filteredRestaurant = listOfRestaurant.filter((res) => {
            const cuisines = res.info && res.info.cuisines ? res.info.cuisines.map(cuisine => cuisine.toLowerCase()) : [];
            return res.info.name.toLowerCase().includes(searchText.toLowerCase()) || cuisines.some(cuisine => cuisine.includes(searchText.toLowerCase()));
            });
             setFilteredRestaurant(filteredRestaurant);
        }
    
    

    if (listOfRestaurant.length === 0) {
        return <Shimmer />;
    } else {

    return (
        <div>
            <div className="flex w-full flex-wrap justify-center">
                <div className="w-6/12 m-36 relative">

                    {/* adding a search input box and button */}
                    <div className="relative">
                        <input type="text" 
                        placeholder="Search by Restaurant and cuisines name"
                        className="my-4 mx-1 w-full border border-solid border-black p-4 rounded-full" 
                        value={searchText}
                        onChange={(e) => {
                        setSearchText(e.target.value); }}></input>
                        <button className="absolute right-1 top-1/2 text-xl -translate-y-1/2 rounded-lg p-4" onClick = {() => { handleClick()}}>
                                <ion-icon name="search"></ion-icon>
                        </button>
                    </div>  
                    {/* adding a search input box and button */}

                    <h1 className="font-bold text-center items-center">Discover the Online Food Delivery in Varansi</h1>
                    <div className="flex justify-center my-2">

                        {/* Doing the experiment with react context by using user context */}
                    <input type="text" className = "border border-black p-1 rounded-lg" 
                        value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
                    </div>   
                </div>
                
         
                
            </div>
            {/* Rendering the body with resto card data by using the map function and Applying the HOC functinality over the resto card */}
            <div className="flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                        to = {`/restaurant/${restaurant.info.id}`}>
                            {
                                restaurant.info.isOpen ?
                                (<RestoWithPromoted resData = {restaurant}/>):
                                (<RestoCard resData = {restaurant}/>)
                            }
                </Link>))}
                
            </div>
            {/* Adding the functonality to find out the top rated restaurant */}
                <div className="flex justify-center">
                    <button className=" mt-5 mb-5 text-sm p-2 border border-solid  border-black rounded-xl cursor-pointer"
                        onClick={() => {
                        const filterdlist = filteredRestaurant.filter (
                        (res) => res.info.avgRating>4.1
                        );
                        setFilteredRestaurant(filterdlist);
                        }}> Top Rated Restaurant</button>
                        
                </div>  
                
        </div>
    )
}
}

export default Body;