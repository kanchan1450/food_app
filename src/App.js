import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Body from './components/Body';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import RestaurantMenu from './components/RestaurantMenu';
import {useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import React, { lazy, Suspense } from 'react';
import Grocery from './components/LazyLoadingGrocery';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import Cart from './components/Cart';

const App = () => {


  const Grocery = React.lazy(() => import("./components/LazyLoadingGrocery"));

  const About = lazy(() => import("./components/AboutUs"));

  // Here We are updating the userName over the whole app whereever it is used, with the help context provider.
  const[userName, setUserName] = useState(null);
   useEffect(() => {
    const data = {
      name: "kanchan"};
      setUserName(data.name);
      
    },[]);

  return (
    <Provider store={AppStore}>
    <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
    <Router>
      <div className="min-h-screen  dark:text-gray-100  dark:bg-slate-900 duration-100">
        {<Header/>}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<Suspense fallback = {<h1>About US page Loading....</h1>}><About/></Suspense>} />
          <Route path="/contact" element={<ContactUs/>} />
          {/* <Route path="/about" element={<AboutUs/>} /> */}
          <Route path="/grocery" element={<Suspense  fallback = {console.log("loading")}>
            <Grocery/>
            </Suspense>} />
          <Route path="/restaurant/:resId" element={<Menu/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        
      </div>
      
    </Router>
    </UserContext.Provider>
    </Provider>
  )
}

export default App;
