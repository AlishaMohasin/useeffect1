import React,{useState,useEffect} from 'react'
import styles from "./todo.module.css";

const Todo = () => {
  const[newtodo,setnewtodo]=useState("")
  
    const [todos, settodos] = useState([])
    
 
 const saveinfo=()=>{
  fetch("  http://localhost:8080/todos",
  {method:"POST",

headers:{"content-type":"application/json"},
body:JSON.stringify({value:newtodo,
iscompleted:false})



})
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    settodos([...todos,data])
  
setnewtodo("")
});
  
 }
 

 
 

    useEffect(() => {
    
        fetch("  http://localhost:8080/todos?_page=1&_limit=6")
 
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
          settodos(data)
        });
     
     
    },[])
    
  
  return (
    <div>
        <h1>Todos</h1>
        <div><input  value={newtodo} onChange={({target})=>setnewtodo(target.value)} placeholder={"Enter Todos"}/>
        <button className={styles.b1} onClick={saveinfo}>Save</button></div>
        {todos.map((todo)=>(<div key={todo.id}>{todo.value}</div>))}
    </div>
  )
}

export default Todo