import React,{useState} from 'react'
export default function CustomHooks() {
  const[num,setNum]=useState(3);

  const increment=()=>{
      setNum(num+1)
  }
 
  const decrement=()=>{
    setNum(num-1)
}
 
    return { 

        num,increment,decrement
        
        // <div>
        //     {/* <h1>value:{num}</h1> */}
        // <button onClick={()=>increment()}>+</button>
        // <button onClick={()=>decrement()}>-</button>
        // </div>
    }
}
