import React, { useState } from "react";

function Input() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(event) {
        console.warn(event.target.value);
        setData(event.target.value);
        setPrint(false);
    }

    return (
        <div className="App">
            <h5>Get input</h5>
            {print ? <h5>{data}</h5> : null}
            <button onClick={() => setPrint(true)}>Print data</button>
            <input type="text" placeholder="Type here" onChange={getData}></input>
        </div>
    );
}

export default Input;
