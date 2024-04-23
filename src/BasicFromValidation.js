import React, { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import Retrun from "./Return";

function Validation() {
    const [user, setUser] = React.useState(" ")
    const [passward, setPassward] = React.useState(" ")
    const [usererr, setusererr] = React.useState(false)
    const [passwardrerr, setpasswardrerr] = React.useState(false)
    function HandleLogin(e) {
        // alert("devilal what are you doing")
        if (user.length > 3 || passward.length > 3) {
            alert("Type Error")
        }
        else {
            alert(" all good")

        }
        e.preventDefault()
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            // console.warn("invalid")
            setusererr(true)
        } else {
            setusererr(false)

        }
        console.warn(e.target.value.length)
        setusererr(item)
    }
    function passwardHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            // console.warn("invalid")
            setpasswardrerr(true)
        } else {
            setpasswardrerr(false)

        }
        console.warn(e.target.value.length)
        setpasswardrerr(item)
    }
    return (
        <div className="App">
            <form onSubmit={HandleLogin}>
                <h1>Login Form form React js</h1>
                <input type="text" placeholder="User Id" onChange={userHandler}></input> {usererr ? <span>user not valid</span> : null} <br /> <br />
                <input type="number" placeholder="User Passward" onChange={passwardHandler}></input> {passwardrerr ? <span>passward not valid</span> : null} <br /> <br />
                <br /> <br />
                <button type="submit" >Login</button>
            </form>

        </div>
    )
}

export default Validation;