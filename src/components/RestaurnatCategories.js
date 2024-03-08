import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({data, showItems, setShowIndex,setShowItems}) =>{

    const[showItem, setShowItem] = useState(false);
    // const handleClick = () =>{
    //    setShowIndex();
    //    setShowItems();

    // };
    return(
        <div  >
            <header className="w-6/12 mx-auto my-1 p-4 bg-gray-50 shadow-lg cursor-pointer" onClick={() => {
          setShowIndex();
          setShowItems();
        //   console.log("clicked") 
                }}>
                <div className="flex justify-between ">
                    <span className="font-bold">{data?.title}({data?.itemCards?.length || data?.categories?.length})</span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                
            </header>
            <div className="w-6/12 mx-auto p-4">
                {showItems && <ItemList items = {data?.itemCards || data?.categories}/>}
            </div>
            
        </div>
    )
}

export default RestaurantCategories;