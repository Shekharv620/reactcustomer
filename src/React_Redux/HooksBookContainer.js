import React from 'react'
import {buyBooks}from './BookAction'
import {useDispatch, useSelector }from 'react-redux'


function HooksBookContainer() {
    const noOfBooks = useSelector(state => state.noOfBooks)
    const dispatch =useDispatch() 
    return (
        <div>
            <h2>Num Of Book:{noOfBooks}</h2>
            <button onClick={()=> dispatch(buyBooks())}>buy book</button>
        </div>
    )
}

export default HooksBookContainer;
