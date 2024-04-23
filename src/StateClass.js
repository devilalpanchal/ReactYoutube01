import React from "react";
class Tstate extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:"devi@gamil.com"
        }
    }

    render()
    {
console.warn("Remder ,method" , this.state.email)
return(
    <div className="app">
        <h1>User component</h1>
        <button onClick={()=>this.setState({email:"devdflksd.com"})}> Update email Address</button>
    </div>
)
    }
}

export default Tstate 
// render is remdring when cycle is run when component loaded,update with props adn state, component is removed