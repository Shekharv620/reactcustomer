import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Clist extends Component {

    state = {
        users: [],
        getId: "",
        name: "",
        gender: "",
        account_no: "",
        balance: "",
        accounttype: "",
        email: ""
    }

    getUserDetails() {
        axios.get('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/')
            .then(response => {
                // console.log(response)
                this.setState({
                    users: response.data
                })
                //  console.log(this.state.users[0].name)
            })
    }

    componentDidMount() {
        this.getUserDetails()
    }

    update = (getUser) => {

        this.setState((state) => (
            {
                getId: getUser.id,
                name: getUser.name,
                gender: getUser.gender,
                account_no: getUser.account_no,
                balance: getUser.balance,
                accounttype: getUser.accounttype,
                email: getUser.email
            }
        ))
    }
    onDeleteEmpRecord(cusID) {
        alert(cusID);
        axios.delete('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/' + cusID + '/', {
            cusId: cusID,
        }).then(response => {
            console.log("Data:", response);
            this.getUserDetails()
        })
            .catch(error => {
                console.log("Error:", error)
            })
    }
    onUpdateData(cusID) {
        alert(cusID);

    }

    render() {
        if (this.state.name !== "" && this.state.email !== "") {
            //  console.log(this.state.name);
            return <Redirect
                to={{
                    pathname: "/UpdateCustomer",
                    state: {
                        getId: this.state.getId,
                        name: this.state.name,
                        gender: this.state.gender,
                        account_no: this.state.account_no,
                        balance: this.state.balance,
                        accounttype: this.state.accounttype,
                        email: this.state.email,
                    }
                }}
            />
        }
        return (
            <div style={{ textAlign: 'center', }}>
                <Link to='/Home'
                    style={{ backgroundColor: '#ffc107', float: 'left', margin: '1rem', marginTop: '1rem', padding: '7px', borderRadius: '5px', fontSize: '1.5rem', color: 'black' }}>
                    Back
                </Link>
                <h1>User Details</h1>
                <Table responsive style={{ color: 'white' }}>
                    <thead >
                        <tr>
                            <th> Id </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Gender</th>
                            <th> Account No </th>
                            <th> Balance</th>
                            <th> AccountType </th>
                            <th colSpan='2'> Action </th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.state.users.map((cus) =>

                            <tr key={cus.id}>
                                <td> {cus.id} </td>
                                <td> {cus.name}</td>
                                <td> {cus.email}</td>
                                <td> {cus.gender}</td>
                                <td> {cus.account_no}</td>
                                <td> {cus.balance}</td>
                                <td> {cus.accounttype}</td>
                                {<td><Button variant="danger"
                                    onClick={() => this.onDeleteEmpRecord(cus.id)}>Delete</Button></td>}

                                {<td> <Button variant="info"
                                    onClick={() => this.update(cus)}>Update</Button></td>}

                            </tr>

                        )}
                    </tbody>

                </Table>
            </div>
        )
    }
}
