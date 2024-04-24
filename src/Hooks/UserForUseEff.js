import { useEffect, useState } from "react";

function USeLiPro1(props) {
    useEffect(() => {
        console.log(" updated data")
    }, [props.count])

    return (
        <div className="devilal1">
            <p className="devilal"> hi devi USeEffect with props and state {props.count}</p>
            <p className="devilal"> hi devi USeEffect with props and state {props.data}</p>
        </div>
    )
}

export default USeLiPro1;