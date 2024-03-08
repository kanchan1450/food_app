import { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurnatCategories from "./RestaurnatCategories";
import UseMenu from "../utils/useMenu";


const Menu = () => {

    // const[resMenu, setResMenu] = useState(null);
    const[showItems, setShowItems] = useState(false);
    const[showIndex, setShowIndex] = useState(null);
    const{resId} = useParams();

    const resMenu = UseMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async() => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log("menu data", json);
    //     setResMenu(json.data);


        
    // };

     if(resMenu === null) return <Shimmer/>
   

    
    // const {itemCards} = resMenu?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);
    const{name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info ;

    const resCategories = resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card["@type"]
                                === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
                                c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" )
    console.log("categories -", resCategories);

    return (
        <div className="text-center">
        
                <h1 className="my-4 font-bold">{name}</h1>
                <p className="my-4 ">{cuisines.join(",")} : {costForTwoMessage}</p>
           
           {/* Here we are just making accordian expandable and compressable, and showing data in accordian body */}
            {resCategories.map((category, index) => (
                <div  key={category?.card?.card?.title}>
                    <RestaurnatCategories data = {category?.card?.card}
                    showItems = {index === showIndex && showItems}
                    setShowIndex = {() => setShowIndex(index)}
                    setShowItems={() => index === showIndex && setShowItems(!showItems)}/>
                    
                </div>))}

             
        </div>
    )

};

export default Menu;