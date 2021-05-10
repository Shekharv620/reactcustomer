import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class CustomerLogout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        this.state = {

        }
    }

    render() {
        return (

            <div style={{ height: "500px" }}><br /><br />
                <h1>Go to login Page!!!</h1><br /><br /><br /><br /><br />
                <Link class="btn btn-success" to='/'>Login Again</Link>
            </div>
        )
    }
}
