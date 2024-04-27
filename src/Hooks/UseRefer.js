import React ,{createRef} from 'react'


class UseFefer extends React.Component {

    constructor()
    {
        super()
        this.inputRef = createRef();
    }


    componentDidMount(){
        // console.log(this.inputRef.current.value = " 1000")
        console.log(this.inputRef)
    }

    getVAlues()
    {

        console.log(this.inputRef.current.value)
this.inputRef.current.style.color = "red"
this.inputRef.current.style.BackgroundColor = "red"



    }

    render() {
        return (

            <>
                <div className='app'>
                    <p>USe of Useref very raraly it can manipulate dom it has right to direct to show hide and chnge color if you want to add many event in one funcction so you can use useref  </p>

                    <input type='text'  ref={this.inputRef}  ></input>
                    <button onClick={()=>this.getVAlues()}  >Check Ref</button>

                    
                </div>
            </>
        )
    }
}




export default UseFefer;