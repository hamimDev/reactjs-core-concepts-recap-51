import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <div className="App2">
      <District 
      name ='Barishal' 
      special='Nodi'
      ></District>
      <District 
      name ='Dhaka' 
      special='Population'
      ></District>
      <District 
      name ='Rajsahi' 
      special='Vasa'
      ></District>
      <District 
      name ='Chitagong' 
      special='Cox Bazar'
      ></District>
      </div>
    </div>
  );
}


function LoadPost(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  },[])
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => console.log(post))
      }
      <div className='container'>
      {
        posts.map(post => <Post
          title={post.title} 
          body ={post.body}
        >
        </Post>)
      }
      </div>
    </div>
  )
}

function Post(props){
  return (
      <div className='item'>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
      </div>
  )
  
}

function District(props){
  const [power, setPower] = useState(1);
  const bootsPower =()=>{
    const newPower = power *2;
    setPower(newPower);

  }
  return (
    <div className='district'>
      <h1>Name: {props.name} </h1>
     <p>Specialty: {props.special}</p>
     <h4>Power: {power}</h4>
     <button onClick={bootsPower}>Boost The Power</button>
    </div>
  )
}



export default App;
