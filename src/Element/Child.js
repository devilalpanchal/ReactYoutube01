// import React from "react";


function Child(props){
    const datach = "hitesh mittal"
return(
    <>
    <div className="App">
<h2>Child element ..</h2>
<h2>User Name :{props.name}</h2>
<button> Click me</button>
<button onClick={ ()=>props.alert(datach)}> Alert me</button>
    </div>
    </>
)
}


export default Child;