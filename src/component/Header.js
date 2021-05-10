import React from 'react'
import {Link} from './react-router-dom'
export default function Header() {
    return (
        <div>
            <h1>this is header</h1>
            <div>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/Contact'>Contact</Link> </li>
                <li><Link to='/AboutUs'>AboutUs</Link> </li>
                <li><Link to='/Help'>Help</Link> </li>
            </ul>

        </div>
        </div>
    )
}
