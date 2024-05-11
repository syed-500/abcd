import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
const[name,setName]=useState("");
const [shown,setShown]=useState(true);
// useEffect(()=>{
  
//   console.log(` my name is ${name} and I AM ${count} years old`)
// },[name,count])

useEffect(()=>{
  const timeout=setTimeout(()=>{
    console.log(`my name is ${name}`)
  },1000)
  return()=>{
    clearTimeout(timeout);
  }
})
  return (
    <>
      <div>
        <button style={{display:"block",marginBottom:"1rem"}}
        onClick={()=>setShown(s=>!s)}>s/h</button>
        {/* <ClassComponent/> */}
          {}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
