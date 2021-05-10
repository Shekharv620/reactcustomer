import React from 'react'
import {EMP_Name} from '../action/nameAction'
import {Emp_id} from '../action/IdAction'
import{product_price} from '../Reducer/productReducer'
import{product_name}  from '../Reducer/productReducer'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Cart from './Cart'

function Productcontainer(props) {
  


    return (
        <div>
            <Router> 
            <h2>name:{props.names}</h2>
            {/* <button onClick={props.EMP_Name}>update1</button> */}
            
             <h2>id:{props.id}</h2>
            <button onClick={props.Emp_id}>update</button>            
                   <Link to="/Cart" className="btn btn-primary">Add</Link>
            
            <Route exact path='/' component={Productcontainer}></Route>
            <Route  path='/Cart' component={Cart}></Route>
            </Router>
      </div>



    )


    }    




          
 
const mapStateToProps=(state)=>{
    return{
        names:state.name1.names,
         id:state.id1.id,
        //  product:state.product1.productzzz
        // price:state.price
}
}




const mapDispatchToProps=(dispatch)=>{
    return{
        EMP_Name :function(){
            dispatch(EMP_Name());
        },
        Emp_id :function(){
            dispatch(Emp_id());
        
        },
        // product_name :function(){
        //     dispatch(product_name());


        
        // },
        // product_price :function(){
        //     dispatch(product_price());
        //    },

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Productcontainer)
