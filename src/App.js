import logo from './logo.svg';
import './App.css';

function App() {
 //const students = ['Anil','aman','rahul','akash'];
  //map used for looping
  // students.map((item)=>{
  //   console.warn(item)
  // });
  // for(let i=0; i<students.length; i++)
  // {
  //   console.warn(students[i])
  // }

  const students = [
    {name:'aman',email:'aman@gmail',address:'varanasi'},
    {name:'rahul',email:'rahul@gmail',address:'varanasi'},
    {name:'akash',email:'akash@gmail',address:'varanasi'},
]

  return (
    <div className="App">
      <h1>Handel With Array</h1>
      <table border="1">
      <tr>
<th>Name</th>
<th>email</th>
<th>address</th>
</tr>
      {
      students.map((data)=>
     
       <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.address}</td>
        </tr>
  )
}
</table>
{/* {//in  return only map function is used for loop
  for(let i=0; i<students.length; i++)
  {
    <h1>{students[i]}</h1>
  }
} */}
    </div>
  );
}

export default App;
