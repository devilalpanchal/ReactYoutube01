import React, {useState,useEffect} from "react";
// it is a life cucle method  with state and props

function USeEllo(){
const [count,setCount] = useState(0)
    useEffect(()=>{
console.log("devilal use effect use kar")
    })
//     useEffect(()=>{
// console.log("devilal use effect use kar") // conditona effect
//     },[count])
    return (
        <div className="App">
<h4> USe Of USeEffect {count} </h4>

<button  onClick={()=>setCount(count+1)}> Counter</button>
        </div>
    )
}

export default USeEllo;