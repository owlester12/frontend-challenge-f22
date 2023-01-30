import './Checkout.css';

import CheckCart from './components/CheckCart';
import { useNavigate } from "react-router-dom";



function Checkout({cart}: any) {

  let navigate = useNavigate(); 
  function routeChange(){ 
    navigate('/');
  }

    return (
        <div className = "app">
         <div className = "navBar">
         <h2>Penn Course Cart</h2>
             <button className = 'home' onClick = {routeChange}> Home </button>
        </div>
         <div className = "content">
           <CheckCart acs = {cart}/>
         </div>
       </div>
     );
   }
export default Checkout;

