import React from 'react'
import {useSelector }from 'react-redux'

function HooksCakeContainer() {
    const numOfCake = useSelector(state => state.numOfCake)
    return (
        <div>
            <h2>Num Of Cake:{numOfCake}</h2>
            <button>buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
