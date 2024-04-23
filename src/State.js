

// In State Functional Component

// import React from "react";
import { useState } from "react";
function State() {
    // let data = 'devilal';
    // function updateData() {
    //     data = "developer"
    //     alert(data)
    // }
    function updateData() {
        setData("Devilal Panchal")
    }
    function updateDatanumber() {
        setData1(data1 + 1)
    }
    // console.warn("_____________________________")
    const [data, setData] = useState("developer")
    const [data1, setData1] = useState(0)
    return (
        <div className="App">
            <h2>{data}</h2>
            <h2>{data1}</h2>
            <button onClick={updateData}>Update data</button>
            <button onClick={updateDatanumber}>Update data number</button>
        </div>
    );
}
export default State;
{/* <h1>{data}</h1> */ }
