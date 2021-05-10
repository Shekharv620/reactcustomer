import React,{useState,useEffect} from 'react';



export default function Hooks_demo() {
    const [name,setName] =useState("kishan")
     const [rollno,setRollno] =useState("007") 
    const [branch,setBranch] =useState("cs'c")
    const [fees,setFees] =useState("1100000")


    useEffect(()=>{
        console.log("calling useEffect!!!!",)
    }) 


     const updateValue =()=>{
        setName("sadik")
        setRollno("005") 
        setBranch('Ec')
        setFees("200000")
                            }
    



    return(    
                     
        <div>
                <h1>welcome to hooks</h1>

                <h2>Student record</h2>


                <h3>Name:{name}</h3>
                <h3>Rollno:{rollno}</h3>
                <h3>Branch:{branch}</h3>
                <h3>Fees:{fees}</h3>

                 <button onClick={()=>updateValue() }>update</button>  
                 {/* <button onClick={()=>deleteValue() }>Delete</button> 
                  {/* <button onClick={()=>setData2('ravi') }>update</button> */}
                 {/* <button onClick={()=>setData3('ravi') }>update</button>
               */}
        </div>
    )
            }          
