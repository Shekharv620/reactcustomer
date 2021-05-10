import React from 'react'
 import {buyBooks} from './BookAction'
 import {connect} from 'react-redux'

 function BookContainer(props) {
    return (
        <div>
            <h1> noOfBooks:{props.noOfBooks}</h1>
            <button  onClick={props.buyBooks}>BuyBooks</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
            noOfBooks:state.noOfBooks
    }
}
const mapDispatchToProps = (dispatch) => {
        return{
            buyBooks:function(){
                dispatch(buyBooks());
            }

        }

}
export default connect(mapStateToProps,mapDispatchToProps)(BookContainer);