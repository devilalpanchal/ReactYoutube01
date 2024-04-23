import React from "react";

function UserDevi(props){


   
    return (
        <div className="app">
<h2> Function as Props</h2>
<button onClick={()=>props.data()}> first way call data fuction</button>
<button onClick={props.data}>call data second way</button>
        </div>
    )
}

export default UserDevi;
