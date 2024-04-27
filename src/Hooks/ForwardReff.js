import React, { useRef } from "react";
import ForwardChild from "./UseForChildComponent";
function ForwarRef() {

    let inputforReff = useRef(null)
    function UpdateInpurt() {
        inputforReff.current.value = "20000"
        inputforReff.current.focus()
    }
    return (
        <>
            <div className="App">
                <h2>Use Of Forward Ref Parent</h2>
                <button onClick={UpdateInpurt}>Update UseForward</button>

            </div>
            <ForwardChild  ref={inputforReff} />
        </>
    )
}

export default ForwarRef;