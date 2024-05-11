import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
const[name,setName]=useState("");
const [loading,setLoading]=useState(true);
// useEffect(()=>{
  
//   console.log(` my name is ${name} and I AM ${count} years old`)
// },[name,count])
const vt=[];

useEffect(()=>{
  const timeout=setTimeout(()=>{
    console.log(`my name is ${name}`)
  },1000)
  return()=>{
    clearTimeout(timeout);
  }
})
const [users,setUsers]=useState();
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
  console.log(data);
  
})
  return (
    <>
      <div>

        <button style={{display:"block",marginBottom:"1rem"}}
        onClick={()=>setShown(s=>!s)}>s/h</button>
        {/* <ClassComponent/> */}
          {}
       
      </div>
      
      <h1>{JSON.stringify(vt)}</h1>
      <div className="card">
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {count} {name}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
