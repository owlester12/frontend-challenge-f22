import './App.css';

import Nav from './components/Nav';
import Courses from './components/Courses';
import Cart from './components/Cart';
import Filter from './components/Filter';

import {useState, useEffect} from 'react';


function App({cart, delCart, addCart}: any) {

  const [search, setSearch] = useState(" ");
  const [filt, setFilt] = useState([true, true, true, true]);
  
  function handleSearch(inp: string){
    setSearch(inp);
  };

  

  return (
     <div className = "app">
      <div className = "nav">
      <Nav setSearch = {handleSearch}/>
      </div>
      <div className = "content">
        <div className = "right">
        <Filter f = {filt} s = {setFilt}  />
        <Cart acs = {cart} dcs = {delCart} />
        </div>
        <div className = "courses">
        <Courses  theSearch = {search} filts = {filt} scs = {addCart} cart = {cart} dcs = {delCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
