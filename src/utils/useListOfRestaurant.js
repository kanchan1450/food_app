import { useState, useEffect } from "react";
import { SWIGGY_URL } from "./Constants";

const UseListOfRestaurant = () =>
{
    const [listOfRestaurant, setistOfRestaurant] = useState([]);

    // const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    useEffect(() => {fetchData() ;}, []);

    const fetchData = async() => {
    const data = await fetch (SWIGGY_URL)
    const json = await data.json();

    //  console.log(json);
    setistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    return listOfRestaurant;

};

export default UseListOfRestaurant;