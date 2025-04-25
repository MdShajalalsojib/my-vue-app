
import Counter from './Counter';
import Batsman from './Batsman';
import Bowler from './Bowler';
import Friends from './Friends';
import Users from './Users';
import Posts from './Posts';
import './App.css'
import { Suspense } from 'react';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  const postsPromise = fetchPosts();

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
      <Video2></Video2>


      <Bowler></Bowler>

      <Batsman></Batsman>

      <Counter></Counter>
      <Suspense  fetchUsers = {<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback= {<h3>Friends are coming for treat ....</h3>}>
           <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

       <Suspense fallback = {<h4>Posts are coming.....</h4>}>
       <Posts postsPromise = {postsPromise}></Posts>
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
