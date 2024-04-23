function Bpp() {

    function File() {
        return <div>
            <h3>
                alert('hdhdh')
            </h3>
        </div>
    }
    let data = " developer Sir";
    function Call() {
        data = "java Script developer"

        alert(data)
    }

    return <div className="flex">
        <h4>{data}</h4>
        <h4>Event Click</h4>
        <button onClick={Call}> Click Me</button>
        <button onClick={() => alert("hello devi")}> alert call</button>
        <button onClick={() => Call()}> Simple call event</button>
        <input placeholder="Add your task"

            onChange={File}></input>
    </div>
}

export default Bpp;
