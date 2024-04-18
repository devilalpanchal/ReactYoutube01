import React, { useState } from "react";

function input(){
const  [data,setData] = useState(null)
const  [print,setPrint] = useState(false)
    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return <div className="App">
        <h5> Get input</h5>
        {print?
            <h5>  {data}</h5>
            :null
            }
        <button onClick={()=>setPrint(true)}>Print data</button>
        <input type="text" placeholder="Here type name" onChange={getData}></input>
    </div>
}

export default input; 