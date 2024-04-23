import React, { useState } from "react";
function Student(props) {
    console.warn(props.name)
    const [name, setName] = useState("heloo")
    return (
        <div className="App">
            <h1>student component</h1>
            <p>Hy : name:{name}</p>
            <p>Hy : {props.name}</p>
            <p>Email: {props.email}</p>
            <p>City: {props.others.address}</p>
            <button onClick={() => { setName("devilal panchal") }}>set Name</button>
        </div>
    )
}

export default Student;