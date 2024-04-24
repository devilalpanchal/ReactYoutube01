import { useEffect, useState } from "react";
import USeLiPro1 from "./UserForUseEff";
function USeLiPro() {

    const [data,setData] = useState(10)
    const [count,setCount] = useState(1)

    useEffect (() =>{
        console.log(" updated data")
    },[data])

    useEffect (() =>{
        console.log(" updated count " )
    },[count])
    return (
        <div className="devilal1">
            <p className="devilal"> hi devi USeEffect with props and state {count}</p>
            <p className="devilal"> hi devi USeEffect with props and state {data}</p>
            <button onClick={()=>setCount(count+1)}> Update count</button>
            <button onClick={()=>setData(data+1)}> Update daga</button>
<USeLiPro1 count={count} data={data}/>
        </div>
    )
}

export default USeLiPro;