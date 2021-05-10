import axios from 'axios';
import React, { Component } from 'react'

export default class AxiosGetRequest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }
    
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then
        (response=>{
            console.log(response.data)
            this.setState({
                users:response.data
            })
            console.log(this.state.user[1].name) 
        }).catch(error =>{
                    console.log(error)       
        })
    }

    render() {
        return (
            <div>
                <table responsive border='2px solid black'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>Address</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((users)=>
                   <tr>
                       <td>{users.name}</td>
                       <td>{users.username}</td>
                       <td>{users.email}</td>
                       <td>{users.address.street}</td>

                   </tr>
                   
                   )}
                </tbody>
                </table>
            </div>
        )
    }
}
