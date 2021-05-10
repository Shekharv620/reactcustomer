import React,{useState,useEffect} from 'react';


export default function Hooksdiffer() {
 
        const[state,setState]=useState({
            name:"smile",
            rollno:"999",
            branch:"civil",
            fees:"600000"
        })
    
        // useEffect(()=>{
        //     console.log("calling useEffect!!!!",)
        // }) 
    
    
         const updateValue =()=>{
           setState({
            name:"rocko",
            Rollno:"121",
            branch:"ec",
            fees:"20000"
           })
        
        }
            const deleteValue=()=>{ 
                setState({
                    name:"",
                    Rollno:"",
                    branch:"",
                    fees:""
                   })
            
            }
    
    
    
        return(    
                         
            <div>
                    <h1>welcome to hooks</h1>
    
                    <h2>Student record</h2>
    
    
                    <h3>Name:{state.name}</h3>
                    <h3>Rollno:{state.rollno}</h3>
                    <h3>Branch:{state.branch}</h3>
                    <h3>Fees:{state.fees}</h3>
    
                     <button onClick={()=>updateValue() }>update</button>  
                       <button onClick={()=>deleteValue() }>Delete</button>
                 
            </div>
        )
}          
    
