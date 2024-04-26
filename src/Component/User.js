function User(props){
    return(
        <div className="App">
            <h3>User Component {props.data2.name}  </h3>
            <h3>User Component {props.data2.email}  </h3>
            <h3>User Component {props.data2.address}  </h3>
        </div>
    )
}

export default User;