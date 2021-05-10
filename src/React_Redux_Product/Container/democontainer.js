import React from 'react'
import {EMP_Name} from '../action/nameAction'
import {Emp_id} from '../action/IdAction'
import {connect} from 'react-redux'


function DemoContainer(props) {
    return (
        <div>
            <h2>name:{props.names}</h2>
            <button onClick={props.EMP_Name}>update</button>
             <h2>id:{props.id}</h2>
            {/* <button onClick={props.Emp_id}>update</button>  */}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        names:state.name1.names,
         id:state.id1.id,
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
        }

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(DemoContainer)
