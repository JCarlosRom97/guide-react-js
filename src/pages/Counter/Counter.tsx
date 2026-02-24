import { useState } from 'react';
import './Counter.css';
export const Counter = () =>{
    const [counter, setCounter] = useState<number>(0);
    return(
        <>
            <h3>Counter</h3>
    
            <h1>{counter}</h1>
     
        </>
    )
}