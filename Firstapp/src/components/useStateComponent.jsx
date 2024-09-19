import React from 'react';
import { useState } from 'react';

export default function UseStateComponent() {
    const [count, changeCount] = useState(0);
    const handleCount=()=>{
        changeCount(count+1);
    }
    return (
    <>
    <button onClick={handleCount}>Click here</button>
    <h1>You have clicked {count}</h1> 
    </>
  )
}
