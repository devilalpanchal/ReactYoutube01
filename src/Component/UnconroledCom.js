import React, {useRef } from "react";

function UnconrolComponent() {
    let inputRef = useRef(null)
    let inputRef01 = useRef(null)
function SubmitForm(e){
    e.preventDefault()
    console.log('input one un contrelld componnet',inputRef.current.value)
    console.log('input one un contrelld componnet',inputRef01.current.value)
    let devilal = document.getElementById(  "helo nhdj",'devilal').value
    console.log(devilal)

}
    return (
        <>
            <div className="app">
                <h3>UnControlled Component</h3>
                <p> controll componnent Direct use of DOM</p>
                <form onSubmit={SubmitForm}>
                    <input type="text" ref={inputRef} /> <br /> <br />
                    <input type="text" ref={inputRef01} /> <br /> <br />
                    <input type="text" id="devilal"/> <br /> <br />
                    <button> Submit</button>
                </form>
            </div>
        </>
    )
}

export default UnconrolComponent;