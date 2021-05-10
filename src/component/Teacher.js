import React, { Component } from 'react';
import Student from './Student'
export default class Teacher extends React.Component {
    render() {
        return (
            <div>
                <Student name="Sadik khan" rollno={191} age={45} fees={34000} />
                <marquee scrollamount="20"><h1 style={{ color: 'red' }}>Teacher's Record</h1></marquee>
                <h2>Name:{this.props.name}</h2>
                <h2>Education:{this.props.education}</h2>
                <h2>Subject:{this.props.subject}</h2>
                <h2>Salary:{this.props.salary}</h2>


            </div>
        )
    }
}
//ReactDOM.render(<Teacher />, document.getElementById('root'));