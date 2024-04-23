import React from "react";
class Didupdate extends React.Component{
    constructor() 
    {
        super();
       console.log(" cosntrwtj2")
       this.state={
        name:"devi",
        count:0
       }
    }
    // componentDidUpdate()  
    componentDidUpdate(preProps,preState,snapshot)  
    {
        console.log("componentDidUpdate",snapshot) // it is undefined hai 
        console.log("componentDidUpdate",preState.count,this.state.count)// previous count in console deta hai to check
        // if (preState.count==this.state.count) {
        //     alert(" data is already same")
        // }
if (this.state.count<10) {
    this.setState({count:this.state.count+1})
    
}
    }
    render() {
        console.log('render')
        return (
            <div className="app">
                <h2> ComponentDidupdate {this.state.count} </h2>
                <button onClick={()=>{this.setState({name:"divi sir developer"})}}>update name2</button>
                <button onClick={()=>{this.setState({count:1})}}>update previous state</button>
            </div>
        )
}
       
}

export default Didupdate;