// 1 mounting    componentDidMount
// 2 updating   componentDidUpdate
// 3 unmounting   componentDidunMount

// life cycle is run when component loaded,update with props adn state, component is removed


// contractor method first life cycle method in js 
 

import React from "react";

class Bsall extends React.Component{
constructor()
{
    super()
    // to call parent constractor to component
    console.warn( " heloo mamma consractor")

    this.state={
        data:" helo bhagwan {25555}"
    }
}

// we called api in component did mpount  to first caling
    render()
    {
        console.log('render')
        return(
            <h1 className="app"> hello devid use class component {this.state.data}</h1>
        )
    }
}
export default Bsall;

// in functional component we can not use life cycle  directly without hooks