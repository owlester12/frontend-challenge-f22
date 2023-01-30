import './Nav.css';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Nav({setSearch}: any) {

  const [theInput, setTheInput] = useState(false);

  function handleChange(e: any){
   setTheInput(e.target.value);
  };

  function onSubmitSearch(e: any){
    e.preventDefault();
    setSearch(theInput);

  }

  let navigate = useNavigate(); 
  function routeChange(){ 
    navigate('checkout');
  }


  
  
return  (<div className = "navBar">
    <h2>Penn Course Cart</h2>
    <form className = "form" onSubmit={e => onSubmitSearch(e)}>
    <input className = "theInput" type = "text" id = "navInput" onChange={e => handleChange(e)}  />
    <button type = "submit" className = "submit"> <SearchIcon/></button>
    </form>
    <button className = "checkOut" onClick = {routeChange}> Checkout </button>
  </div>
  );
}

export default Nav;