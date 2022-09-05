import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap'

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
    {name:'vishal',email:'vshal@gmail',address:'varanasi'},
]

  return (
    <div className="App">
      <h1>List with bootstrap table</h1>
      <Table striped variant="dark">
      <tbody>
      <tr>
<th>SR.No</th>
<th>Name</th>
<th>email</th>
<th>address</th>
</tr>

      {
      students.map((data,i)=>
     data.name==='aman'?
       <tr key={i}>
        <td>{i+1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.address}</td>
        </tr>:null
  )
}
</tbody>
</Table>
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
