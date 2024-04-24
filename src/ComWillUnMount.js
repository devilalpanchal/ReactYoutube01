import React from "react";
import Pp from "./PP";
class CompWilUnMount extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    shouldComponentUpdate()  //it is call onely one time after to set state
    {
        console.log("shouldComponentUpdate", this.state.count)
    }
    render() {
        return (
            <div className="devilal">
                {
                    this.state.show ? <Pp /> : <h5>devilal child is removed</h5>
                }
                <h2> CompWilUnMount</h2>
                <button onClick={() => this.setState({ show: !this.state.show })}> Toggle Child Component</button>
            </div>
        )
    }

}

export default CompWilUnMount;