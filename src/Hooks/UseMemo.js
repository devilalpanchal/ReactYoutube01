import { useState, useMemo } from "react";

function Memo() {


    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)


    const MulticountUseMemo = useMemo(function MultiCount() {
            console.log(" Multi Count")
            return count * 5
        },[count])
    return (

        <>

            <div className="App">
                <h2>  memo Hook to use  returns a memoized value and prevents the application from unnecessary re-renders</h2>
                <h3>{count}</h3>
                <h2>{MulticountUseMemo}</h2>
                <button onClick={() => setCount(count + 1)}> Update count</button>
                <h3>{item}</h3>
                <button onClick={() => setItem(item * 10)}> Update item</button>
            </div>
        </>
    )
}
export default Memo;