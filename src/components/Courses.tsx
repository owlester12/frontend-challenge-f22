import courses from '../data/courses.json'
import './Courses.css';
import {useEffect, useState} from 'react';


function TheCourse({cs, scs, inCart, dcs, limit}: any ){

  const [isShown, setIsShown] = useState(false);
  const[courseState, setCourseState] =useState(0);


  useEffect(() => {
   if (cs.number !== courseState ) {
    (setIsShown(false));
    (setCourseState(cs.number));
  }
}
  );

  function handleClick(){

    console.log(cs.number);
    if(cs.number === courseState || isShown === false){
      setIsShown(!isShown);
    } else {
      setIsShown(false);
    }
    setCourseState(cs.number);

  };



  return <div className = 'inCourse' onClick = {handleClick}>
    <div className = 'courseHead' onClick = {handleClick} >
    <div className = 'courseID'>
      {cs.dept} {' '} {cs.number}
    </div>
    <div className = 'title'> {cs.title} </div>
    </div>
  
      
      {isShown && <div className = "description" >  {cs.description} </div>}

      {isShown && (cs["prereqs"] !== undefined) && Array.isArray(cs["prereqs"]) && <div className = 'description'> Prerequisites: {cs["prereqs"]?.join(", ")} </div>}
      {isShown && (cs["cross-listed"] !== undefined) && <div className = 'description'> Also offered as: {cs["cross-listed"]?.join(", ")}</div>}
         

      {!inCart && limit && <button className = "addBut" onClick={() => scs(cs)}>Add to cart</button>}
      {inCart && <button className = "remBut" onClick={() => dcs(cs.number)}>Remove from cart</button>}

  </div>;
}

function Courses({theSearch, filts, scs, cart, dcs} : any) {

  const filtCourse = courses.filter(function(entry){

    console.log(theSearch.toString());


    return (theSearch === ""|| theSearch === " " 
    || theSearch == false || (/*typeof theSearch === 'string' && */(entry.dept.toLowerCase().includes(theSearch.toLowerCase()) ||
    entry.description.toLowerCase().includes(theSearch.toLowerCase()) ||
    entry.title.toLowerCase().includes(theSearch.toLowerCase()) ||
    (entry.dept.toLowerCase() + " " + entry.number.toString()).includes(theSearch.toString().toLowerCase())) ))&&
   ((filts[0]&& entry.number >= 100 && entry.number < 200 )
    || (filts[1] && entry.number >= 200 && entry.number <300)
    || (filts[2] && entry.number >= 300 && entry.number < 400) 
    || (filts[3] && entry.number >= 400 && entry.number < 500)
    );

  })

  return (<div className = "course">
    {filtCourse.map((value) => (

      <TheCourse cs = {value} scs = {scs} dcs = {dcs} inCart = {(cart.map((a: any) => a.number)).includes(value.number)} limit = {cart.length <= 7} />
      
    ))}
  </div>);
}

export default Courses;