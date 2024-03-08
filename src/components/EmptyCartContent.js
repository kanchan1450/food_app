
import { Link } from "react-router-dom";
const Emptycart =  () => {
    
    return(
        <div className="flex flex-col justify-between w-6/12 m-auto mt-4 ">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" className="m-6"></img>
            <p className="p-2 font-semibold ">OOps!! your cart is empty. Add some item to it.</p>
            <div className="flex justify-center my-2">
                <Link to={"/"}><button className=" p-2 bg-black text-white rounded-lg">
                    Go to Home Page
                </button></Link>
                
            </div>
        </div>
    )
};

export default Emptycart;