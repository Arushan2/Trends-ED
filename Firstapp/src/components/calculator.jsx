import { useState } from "react"
import React from 'react'

export default function Calculator() {
  const [results, setResults] = useState(0)
  const [num,setnum] = useState("")
  const handleCalculate=()=>{
    setResults(eval(num))
    handleClear()
  }
  const handleClear = ()=>{
    setnum("")
  }
  const addNum = (addingNum)=>{
    setnum(num+addingNum)
  }
  const keys = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/"]
  return (
    <>
    <h1>Calculator</h1>
    <input type="text" placeholder="Enter your clculation" style={{height:'100px',width:'500px'}} value={num} onChange={(event)=>setnum(event.target.value)}></input>
    <br/>
    <p><button onClick={()=>handleCalculate()}>Calculate</button></p>
    <p><button onClick={()=>handleClear()}>Clear</button></p>
    <p>Results:- {results}</p>
    {keys.map((keys)=>(<button style={{margin:"2px"}}onClick={()=>addNum(keys)}>{keys}</button>))}
    </>
  )
}
