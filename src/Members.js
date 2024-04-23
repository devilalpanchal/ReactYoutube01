import React from "react";

function Membsres(props) {
    return (
        <div className="app">
            <h2> Function as membres function to fast work in less code parent to child code all code keeps in parent</h2>
            <button onClick={() => props.data()}> first way call data fuction</button>
            <button onClick={props.data}>call data second way</button>
        </div>
    )
}

export default Membsres;
