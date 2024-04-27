import React,{forwardRef} from "react";

function ForwardChild(props,ref) {
    return (
        <>
            <div className="app">
                <h3>Forward ref Child</h3>
                <input type="text" ref={ref}/>
            </div>
        </>
    )
}
export default forwardRef(ForwardChild);