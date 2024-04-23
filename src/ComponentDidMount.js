import React from "react";


// life cycle method
// it is call when  all functiojn is ready
// no effect of state or props
// it is best use to call API
// IT IS call after render is mount
class MountDid extends React.Component {
    constructor() 
    {
        super();
        this.state={
            name:"deviall"
        }
        console.log("constractor")
    }
    componentDidMount()  //it is call onely one time after to set state
    {
        console.log("componentDidMount")
    }
    render() {
        console.log('render')
        return (
            <div className="app">
                <h2> ComponentDidMount is call after all function is done {this.state.name}</h2>
                <button onClick={()=>{this.setState({name:"panchal ji"})}}>update name</button>
            </div>
        )
    }

}

export default MountDid;
// we can stop componentDidMount use of shouldComponentUpdate() method return is false