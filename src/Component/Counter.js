import React from "react";
class  Counter extends React.Component {


    render()
    {
console.warn("use component")
        return(
            <>
            
            <div className="app">
                <h2>
                    User Component {this.props.count}
                </h2>
                        </div>
            </>
        )

    }

}
export default Counter;
   

