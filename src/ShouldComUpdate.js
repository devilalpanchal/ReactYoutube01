import React from "react";

class ShouldUpdate extends React.Component {
    constructor() 
    {
        super();
       this.state={
        count:0
       }
        console.log("constractor")
    }
shouldComponentUpdate()  //it is call onely one time after to set state
    {
        console.log("shouldComponentUpdate",this.state.count)
        if(this.state.count>5 && this.state.count<10)
        {
            return true;
        }
        // return true;
        // if we return true it is calling byDefauolt is not udatate is false

    }
    render() {
        return (
            <div className="app">
                <h2> should Component Update  {this.state.count}</h2>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>update count</button>
            </div>
        )
    }

}

export default ShouldUpdate;

// shouldComponentUpdate
// it can stop rendering
// use with state and props
// you can call API if you want to call conditonal api or not so you can use componentDidMount