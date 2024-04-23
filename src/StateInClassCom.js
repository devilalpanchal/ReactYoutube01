import React, { Component } from "react";

class AppState extends Component {
    constructor() {
        super();
        this.state = {
            // data:"hello bro"
            data: 1

        }
    }
    apple() {
        // this.setState({data:"devi singh"})
        this.setState({ data: this.state.data + 1 })
    }

    render() {
        return (
            <div className="App">

                <h1>{this.state.data}</h1>
                <button onClick={() => this.apple()}>update data</button>
            </div>
        )
    }
}

export default AppState;