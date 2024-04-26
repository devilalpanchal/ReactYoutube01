import React from "react";
import Counter from "./Counter";


class  PureCom extends React.PureComponent {

    constructor()
    {
        super();
        this.state={
            count:1
        }
    }
    render()
    {
console.warn("check re rendering")
        return(
            <>
            
            <div className="app">
                <h2>
                    Pure Component to Stop Re rendring and use in class component {this.state.count}
                </h2>
<button onClick={()=>this.setState({count:this.state.count+1})}>   Update Counter</button>

<Counter count={this.state.count}/>
                        </div>
            </>
        )

    }

}
export default PureCom;
   

