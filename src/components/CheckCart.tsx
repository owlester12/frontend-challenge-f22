import './CheckCart.css';


function CheckCourse({cs, dcs}: any ){


  return <div className = 'courseCont'>
    <div className = 'courseHead' >
    <div className = 'courseID'>
      {cs.dept} {' '} {cs.number}
    </div>
    <div className = 'title'> {cs.title} </div>
    </div>
    <div className = "description" > {cs.description} </div>
    {(cs["prereqs"] != undefined) && <div className = 'description'> Prerequisites: {cs["prereqs"]?.join(", ")} </div>}
      {(cs["cross-listed"] != undefined) && <div className = 'description'> Also offered as: {cs["cross-listed"]?.join(", ")}</div>}
         
  </div>;
}

function CheckCart({acs}: any){


 return( <div className = 'checkout' >
    <h4 className = "checkoutText">Course Cart</h4>

    {acs.length <= 1 && <div className = "empty"> Your cart is empty </div> }

  

    {acs?.filter(function(entry: any){return entry.number !== 0}).map((value : any) => (


<CheckCourse  key = {value.number} cs = {value} />

))}
  </div>);
}

export default CheckCart;
