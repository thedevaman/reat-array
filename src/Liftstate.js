function Liftstate(props)
{
    const b = "rahul"
    return(
        <>
        <h1>LiftState Component</h1>
        <button onClick={()=>{props.alert(b)}}>click me</button>
        </>
    )
}

export default Liftstate