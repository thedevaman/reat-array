function User(props){
return(
    // fragment react
      <>
        <h1>react fragment</h1>
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
       </>
   
   
)
}

export default User