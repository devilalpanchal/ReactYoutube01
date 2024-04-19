import React, { useState } from "react";


function Toggle() {
    let [staus, setStatus] = React.useState(false)
    return <div className="app">
        {
            staus ? <h5> devilal panchal toggle kar OR Stay Here</h5> : <h1>Bhag developer Bhag Devin AI Agya</h1>

        }
        <button onClick={() => setStatus(false)}>Hide</button>
        <button onClick={() => setStatus(true)}>Show</button>
        <button onClick={() => setStatus(!staus)}>Toggle</button>
    </div>
}

export default Toggle;