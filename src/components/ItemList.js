import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {


  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return(
    <div>
      { items?.map((item) => (
        <div key={item?.card?.info?.id} className="flex flex-row justify-between">
          <div className="w-9/12 text-left my-2 border-b-2 border-bg-gray-200">
          <h3 className="text-sm font-semibold">{item?.card?.info?.name}</h3>
          <h4 className="text-xs">Rs. {item?.card?.info?.price/100}</h4>
          <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          
          <div className="sm:w-3/12 p-4 relative">
            <img
            src={CDN_URL+ item?.card?.info?.imageId} className="w-full shadow-md rounded-lg"></img>
            <button className = "absolute bottom-1 items-center -mx-5 my-1 py-1 px-2 text-center text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={() => handleAddItem(item)}>
               ADD+
            </button>
          </div>

        </div>

      ))} 
      
    </div>
  )
  // console.log(menuItems);

  // return (
  //   <div>
  //     {menuItems.map((item) => {
  //       const { id, name, price, defaultPrice, description, imageId } =
  //         item?.card?.info;

  //       return (
  //         <div
  //           className="flex flex-col-reverse gap-2 p-4 border-b border-solid border-gray-400 sm:flex-row sm:justify-between sm:items-center"
  //           key={id}
  //         >
  //           <div className="sm:w-9/12 text-lg font-medium">
  //             <h3 className="dishName ">{name}</h3>
  //             <h3 className="dishPrice ">{(price || defaultPrice) / 100} /-</h3>
  //             <p className="text-xs font-normal">{description}</p>
  //           </div>
  //           <div className="sm:w-3/12 relative ">
  //             <img
  //               src={CDN_URL + imageId}
  //               className="w-[85%] m-auto object-cover max-h-[160px] relative"
  //             />
  //             <button className="bg-gray-900 bg-opacity-90 text-white px-4 py-1 w-4/12 absolute left-0 right-0 bottom-0 mx-auto rounded-md sm:w-6/12 sm:-bottom-3 ">
  //               ADD
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default ItemList;