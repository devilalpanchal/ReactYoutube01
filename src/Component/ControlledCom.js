import React, { useState } from "react";

function ConrolComponent() {
const [wel,setWel] = useState("")

    return (
        <>
            <div className="app">
                <h3>Controlled Component</h3>
                <p>in react input files controol by/through State that is the use of controll componnent</p>
                <input type="text" defaultValue={"devilal panchal"}  onChange={(e)=>setWel(e.target.value)}  />
                <h2 className="App"> Value {wel}</h2>
            </div>
        </>
    )
}

export default ConrolComponent;