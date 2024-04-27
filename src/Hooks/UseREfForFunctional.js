import React, { useRef } from "react";

function FunctionalUSef() {
    let Inpofref = useRef(null)

    function HandleInput() {
        console.log(' functiona text devilal; pasnchal')
        Inpofref.current.value = " 1000"
        Inpofref.current.focus();
        Inpofref.current.style.color = "red"
    }
    return (
        <>
            <div className="app">
                <h1>UseRef in React Parent  </h1>
                <p>we use ref use to manipulate dom in Rect java Script</p>
                <input type="text" ref={Inpofref} />  
                <button onClick={HandleInput}  > Use Ref</button>
            </div>
        </>
    )
}

export default FunctionalUSef;