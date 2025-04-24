
import Counter from './Counter';
import Batsman from './Batsman';
import Bowler from './Bowler';
import Users from './Users';
import './App.css'
import { Suspense } from 'react';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

function App() {

  function handleClick(){
    alert('I am clicked')
  }
  const handleClick3 = () => {
    alert('clicked this number 3')
  }

  const handleAdds5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }
   

  return (
    <>
      
      <h1>Md.Shajalal</h1>

      <Bowler></Bowler>

      <Batsman></Batsman>

      <Counter></Counter>
      <Suspense  fetchUsers = {<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      

      {/* javaScript
      <button onclick = "handleClick()">Click me</button> */}
      <button  onClick = {handleClick}>Click ME</button>
      <button onClick = {handleClick3}>Click Me3</button>

      <button onClick ={ () => handleAdds5(10)}>click add 5</button>
       
       
    </>
  )
}

export default App
