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
const[items,setItems]=useState([
  {id:crypto.randomUUID(),name:"Item 1"},
  {id:crypto.randomUUID(),name:"Item 2"},
])
function addItem(){
  setItems(currentItems=>{
    return [...currentItems,{id:crypto.randomUUID(),name:"New Item"}]

  })
}

const [users,setUsers]=useState();
const [error,setError]=useState();

// useEffect(()=>{
//   setLoading(true);
//   setError(undefined);
//   fetch("")
//   .then(res=>{
//     if(res.status===200)
//       {
//         return res.json();
//       }
//       else
//       return Promise.reject(res);
//   })
//   .then(data=>{
//     setUsers(data);
    
//   }).catch(e=>setError(e))
  
//   .finally(()=>{
//     setLoading(false);
  
//   },[users])

// })

let jsx;
if(loading)
{
  jsx=<h2>Loading...</h2>
}
else{
  jsx=JSON.stringify(users)
}
  return (
    <>
      <div>

        <button style={{display:"block",marginBottom:"1rem"}}
        onClick={()=>setShown(s=>!s)}>s/h</button>
        {/* <ClassComponent/> */}
          {}
       
      </div>
      
      <h1>{jsx}</h1>
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
        <button onClick={addItem}>ADD ITEM</button>
        <pre>{JSON.stringify(items,null,2)}</pre>
      </p>
    </>
  )
}

export default App
