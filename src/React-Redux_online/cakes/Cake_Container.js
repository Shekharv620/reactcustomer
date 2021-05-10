 import React from 'react'
import {buyCake} from './CakeAction'
import {connect} from 'react-redux' 


function Cake_Container(props) {
    return (
        <div>
            <h2>NoofCakes:{props.numOfCake}</h2>
            <button onClick={props.buyCake}>BuyCakes</button>
        </div>
    )
}
const mapStateToProps= (state) =>{
    return{
        numOfCake: state.numOfCake
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:function(){
            dispatch(buyCake());
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake_Container);
 