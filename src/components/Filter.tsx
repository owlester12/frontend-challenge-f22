import './Filter.css';


function Filter({f, s}: any){

    function getClass(inp: any){
        if (inp){
            return "selected";
        }
        else {
            return "unselected";
        }
    }



    return ( <div className = "filtCont">

        <div className = "filtTitle"> Filters </div>
        <div className = "filters">

        <button className = {"filt " + getClass(f[0])} onClick={() => s([!f[0], f[1], f[2], f[3]])}> 100s </button>
        <button className = {"filt " + getClass(f[1])} onClick={() => s([f[0], !f[1], f[2], f[3]])}> 200s </button>
        <button className = {"filt " + getClass(f[2])} onClick={() => s([f[0], f[1], !f[2], f[3]])}> 300s </button>
        <button className = {"filt " + getClass(f[3])} onClick={() => s([f[0], f[1], f[2], !f[3]])}> 400s </button>
        
        </div>
        </div>

    );

}
export default Filter;