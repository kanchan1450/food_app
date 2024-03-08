import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearItem } from "../utils/CartSlice";
import Emptycart from "./EmptyCartContent";
import { Link } from "react-router-dom";

const Cart = ({resId}) => {

     const dispatch = useDispatch();
     const handleClearCart = () => {
        dispatch(clearItem());
     }
     const cartItem = useSelector((store) => store.cart.items);
    return (
        <div className="w-5/12 m-auto">
            {cartItem.length === 0 ? 
            (<Emptycart/>) : (
            <>
            <h1 className="font-bold text-xl text-center p-4 m-2">Cart</h1>
            <div className="my-2 p-2 border border-black rounded-lg">
                <ItemList items = {cartItem}/>
            </div>
            <div className="flex flex-row justify-center ">
                <button className="p-2 bg-red-300 rounded-lg " onClick={()=> {handleClearCart()}}>Clear cart</button>
                
                
            </div>
            </>)}
        </div>
    )
}

export default Cart;