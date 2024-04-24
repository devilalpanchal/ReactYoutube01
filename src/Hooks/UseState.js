// in classcomponent like is available state , life cyccle, pure component
// But in Functional component so we use in Hooks


import { useState} from "react";


function Amm(){

    const [data , setData] = useState(" devilll ")
    return(
        <div className="App">
<h2> devilall use Of hooks{data} Starts </h2>

<button onClick={()=>setData("UseState")}> Update</button>
        </div>
    )
}

export default Amm;