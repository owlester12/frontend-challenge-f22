import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./Checkout";
import {useState, useEffect} from 'react';


const RouteSwitch = () => {
    const[cart, setCart] = useState([{'number': 0}]);
    function addCart(inp : any){
        setCart([inp, ...cart]);
      }
    
      function delCart(inp : any){
        setCart(cart.filter(function(entry){
          return entry.number != inp
    
    
        }));
      }

     


  
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart = {cart} addCart = {addCart} delCart = {delCart} />} />
        <Route path="/checkout" element={<Checkout cart = {cart} />} />
      </Routes>
    </BrowserRouter>

  );
};

export default RouteSwitch;