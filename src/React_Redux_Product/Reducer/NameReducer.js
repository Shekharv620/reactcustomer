 import {Product_Name} from '../Types/nameType'



const initialStateName={
     names:"ujjwal",
    
 }

const NameReducer=(state=initialStateName,action)=>{
    switch(action.type){
        case Product_Name: 
            return{
            ...state,
            names:"shekhar"
        }
        default :return state
        
    }   
        
}       

export default NameReducer;