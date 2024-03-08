import { LOGO_URL } from "../utils/Constants";
import { useContext } from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const[darkMode, setdarkMode] = useState(false);
    const {loggedInUser} = useContext(UserContext);
    const onlineStatus = UseOnlineStatus();

    // sunscribing to the store by using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    useEffect(() => {
        themeMode();

    }, [darkMode]);

    const themeMode = () =>
    {
        if(darkMode)
        {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
                
    };
   
    return (
        <div className="flex flex-wrap justify-between bg-teal-400 shadow-lg border border-teal-900 border-solid">
            <div className = "flex items-center w-48">
                <img className="rounded-full object-cover w-14 mx-8 my-2 shadow-lg border-2 border-solid border-teal-700" src= {LOGO_URL} alt=""></img> 

            </div>
            <div className="flex items-center">
                <ul className="flex m-8 p-4">
                     <li className="px-4  font-bold">onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
                     <li className="px-4  font-bold"><Link to = "/grocery">Grocery</Link></li>
                     <li className="px-4  font-bold"><Link to = "/">🏠︎ Home</Link></li>
                     <li className="px-4  font-bold"><Link to = "/about">🛈 About</Link></li>
                     <li className="px-4  font-bold"><Link to = "/contact">☎ ContactUs</Link></li>
                     <li className="px-4  font-bold"><Link to = "/cart">🛒({cartItems.length})</Link></li>
                     <button className="px-2 font-bold border-2 border-solid border-teal-900 rounded-md" onClick={() => {
                        btnName === "Login"? setBtnName("Logout"):setBtnName("Login");
                    console.log(btnName)}} >👤 {btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>

                <div className="dark:bg-slate-700 bg-gray-100 duration-100 rounded-lg me-4">
                    
                        <button
                        onClick={() => {
                            setdarkMode(!darkMode);
                        }}
                        className="h-6 w-6 text-xl leading-9 rounded-full  m-1"  >
                        {!darkMode? <ion-icon name= "sunny"></ion-icon> : <ion-icon name= "moon"></ion-icon>}
                        </button>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Header;