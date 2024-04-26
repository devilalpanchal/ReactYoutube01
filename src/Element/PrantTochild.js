import React from "react";
import Child from "./Child";


function PrantTochild() {
    let data = " Devilal Panchal"


    function ParentAlert(item) {
        alert(item)
    }
    return (
        <>

            <div className="App">
                <h2>data Transfer parent to child & child to parent..</h2>
                <h2> Parent element ..</h2>

                <Child name={data} />
                <Child alert={ParentAlert} />
            </div>
        </>
    )
}


export default PrantTochild;