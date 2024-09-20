import React, { useState } from 'react'
import data from '../assets/assignemnt3_json.json'
export default function ToDo() {
    const [toDoList,settoDoList]=useState(["home work","assigment"])
    const [toDo,settoDo]=useState()
    const HandleAdd = () =>{
        settoDoList ([toDo,...toDoList])
    }
  return (
    <div>
        <h1>To-Do App</h1>
        <input type='text' placeholder='Enter your list' onChange={(e)=>settoDo(e.target.value)}/>
        <button onClick={()=>HandleAdd()}>Add ToDo</button>
        <div>
        {toDoList.length>0?
        <>
        {toDoList.map((li,index)=>(<div key={index}>{li}</div>))} 
        </>
        :<>No Works Avaiable</>}
        </div>
    </div>
  )
}
