import './Cart.css';


function InCourse({cs, dcs}: any ){


  return <div className = 'courseCont'>
    <div className = 'courseHead' >
    <div className = 'courseID'>
      {cs.dept} {' '} {cs.number}
    </div>
    <div className = 'title'> {cs.title} </div>
    </div>
    <button className = 'remBut' onClick = {() => dcs(cs.number)} > Remove from cart</button>
  </div>;
}

function Cart({acs, dcs}: any){


 return( <div className = 'cart' >
    <h4 className = "cartText">Course Cart</h4>

    {acs.length <= 1 && <div className = "empty"> Your cart is empty </div> }

  

    {console.log(acs)}

    {acs?.filter(function(entry: any){return entry.number !== 0}).map((value : any) => (


<InCourse  key = {value.number} cs = {value} dcs = {dcs} />

))}
  </div>);
}

export default Cart;
