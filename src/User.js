function User(props){
return(
   
    <div>
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
       
    </div>
   
)
}

export default User