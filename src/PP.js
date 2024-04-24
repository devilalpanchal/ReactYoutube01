import React from "react";
class Pp extends React.Component {
    componentWillUnmount() {
        alert(" componentWillUnmount ")
    }
    render() {
        return (
            <div className="app">
                <h3>Student component</h3>
            </div>
        )
    }
}

export default Pp;