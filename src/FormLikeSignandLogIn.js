import React, { useState } from "react";

function FormHandle() {
    let [nake, setNake] = React.useState(" ")
    let [kak, setKak] = React.useState(false)
    let [intrest, setIntrest] = React.useState(" ")
    function GetfromData(e) {
        console.warn(nake, kak, intrest)
        e.preventDefault()
    }
    return <div className="App">

        <h3>Handle form in React</h3>
        <form onSubmit={GetfromData}>
            <input type="text" placeholder="Enter name" onChange={(e) => setNake(e.target.value)}></input> <br /> <br />
            <select>
                <option hidden>Select Option</option>
                <option> One</option>
                <option>Two</option>
            </select> <br /> <br />
            <input type="checkbox" onChange={(e) => setKak(e.target.checked)}></input>
            <span >Accept term and condition</span>
            <br /> <br />
            <button type="submit">Submit</button>
            <button >clear</button>
        </form>
    </div>
}

export default FormHandle;