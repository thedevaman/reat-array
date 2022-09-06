import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap'
import User from './User';

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
    {name:'aman',email:'aman@gmail',address:[
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
  ]},
    {name:'rahul',email:'rahul@gmail',address:[
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
  ]},
    {name:'akash',email:'akash@gmail',address:[
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
  ]},
    {name:'vishal',email:'vshal@gmail',address:[
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
      {hn:"10",city:"varanasi",country:"india"},
  ]},
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
    //  data.name==='aman'?
       <tr key={i}>
        <td>{i+1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.address.map((item)=>
         <Table striped variant="dark">
         <tbody>
          <tr>
          <td>{item.hn}</td>
          <td>{item.city}</td>
          <td>{item.country}</td>
          </tr>
          </tbody>
          </Table>
        )}</td>
        </tr>
        //</tr>:null 
  )
}
</tbody>
</Table>
<h1>Re Use Component</h1>
{
  students.map((item,i)=>
  <User data={item}/>
  )
}


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
