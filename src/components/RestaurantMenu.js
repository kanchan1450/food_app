import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import useRestroMenu from "../utils/useRestaurantMenu";

import { useState } from "react";

const RestroMenu = () => {
  const restroMenu = useRestroMenu(); // custom hook for fetching restroMenu info
  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(true);

 

  const restroInfo = restroMenu?.cards
    .filter(
      (card) =>
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    .map((card) => card?.card?.card?.info);
  // console.log(restroInfo);

  const restroMenuCategories = restroMenu?.cards
    .filter((card) => card?.groupedCard)
    .map((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    .flat(1)
    .filter(
      (card) =>
        card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
   
  if (!restroMenu) return <Shimmer />;
  // var menuitemes =
  //    restroMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards
  //     console.log(menuitemes);
  //     console.log(restroMenu); 


  // restroInfo.map(
  //   (restro) =>
  //     ({ name, locality, areaName, cuisines, costForTwoMessage, avgRating } =
  //       restro)
  // );

  return (
    <section className="py-4">
      {restroInfo.map((restro) => (
        <div className="text-center mt-5" key={restro.id}>
        <h1 className="text-3xl font-bold">{restro.name} </h1>
        <h3 className="font-bold text-lg">{restro.locality + ", " + restro.areaName}</h3>
        <h4 className="font-semibold ">
          {restro.cuisines.join(" | ")} - {restro.costForTwoMessage}
        </h4>
        <h4>{restro.avgRating} ⭐</h4>
      </div>
      ))}
      

      <div className="mt-4">
        {restroMenuCategories.map((menuCategory, index) => (
          <MenuCategory
            key={menuCategory?.card?.card?.title}
            menuCategory={menuCategory?.card?.card}
            showItems={index === showIndex && showItems}
            setShowIndex={() => setShowIndex(index)}
            setShowItems={() => index === showIndex && setShowItems(!showItems)}
          />
        ))}
      </div>
    </section>
  );
};
export default RestroMenu;