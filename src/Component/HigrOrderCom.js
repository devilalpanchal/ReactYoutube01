import { backdropClasses } from "@mui/material";
import React, { useState } from "react";

function HigherOrderComponent() {
    return (
        <>
            <div className="devilal flex"   >
                <h1>Higher Order Component</h1>
                <RedCounter cmp={Counter} />
                <GreenCounter cmp={Counter} />
                <YellowCounter cmp={Counter} />

            </div>
        </>
    )
}

function RedCounter(props) {
    return (
        <h2 style={{ backgroundColor: 'red', width: 200, height: 150, borderRadius: 5 }}>Red<props.cmp /></h2>
    )
}
function GreenCounter(props) {
    return (
        <h2 style={{ backgroundColor: 'green', width: 200, height: 150, borderRadius: 5 }}>Green<props.cmp /></h2>
    )
}
function YellowCounter(props) {
    return (
        <h2 style={{ backgroundColor: 'yellow', width: 200, height: 150, color: "red", borderRadius: 5 }}>Yeloow<props.cmp /></h2>
    )
}
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update+1  </button>
        </div>
    )
}

export default HigherOrderComponent;