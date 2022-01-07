

export default(props)=>{
    return(
        <>
        <h2>In Decrement</h2>
       value:{props.value}
       <button onClick={props.onClickHandler}>Decrement</button>

        </>
    )
}