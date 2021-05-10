import React, { Component } from 'react'

export default class Form_demo extends Component {
    constructor(props) {
        super(props)
    
        this.initialState = {
                name:"",
                email:"",
                city:"",
                contact:"",
                message:"",
                

        }
        this.state=this.initialState;
        this.onHandleChange=this.onHandleChange.bind(this);
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }

    onHandleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value,
            selectedOption:event.target.value,
        })

        
    }

    onHandleSubmit(event){

            event.preventDefault();
            console.log(this.state) ;   
            this.setState(this.initialState);    
    }

      render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.onHandleSubmit}>   
                   <div>              
                    <label>Name:</label>
                    <input type='text'name='name' value={this.state.name}
                     placeholder="Enter name" onChange={this.onHandleChange}></input>
                    </div>
            
                    <div>              
                    <label>Email:</label>
                    <input type='email'name='email' value={this.state.email} placeholder="Enter email" onChange={this.onHandleChange}></input>
                    </div>

                    <div>              
                    <label>City:</label>
                    <select name='city' value={this.state.city} placeholder="" onChange={this.onHandleChange}>
                    <option>Select a city</option>
                    <option value='indore'>Indore</option>
                    <option value='banglore'>Banglore</option>
                    <option value='pune'>Pune</option>
                    </select>
                    </div>

                    <div>
                <label>Gender:</label>
                    <input type="radio" value="Male" name="gender"
                   onChange={this.onHandleChange}
                      checked={this.state.selectedOption == "Male"}
                    />Male
                    <input type="radio" value="Female" name="gender"
                    onChange={this.onHandleChange}
                    checked={this.state.selectedOption == "Female"}
                    />Female
                    <input type="radio" value="Other" name="gender"
                    onChange={this.onHandleChange}
                    checked={this.state.selectedOption == "Other"}
                    />Other 
                    
                </div>

                    <div>
                        <label>Message:</label>
                        <textarea name='message' value={this.state.message}
                        placeholder='Enter message' onChange={this.onHandleChange}
                        ></textarea>
                    </div>

                    <button onClick='submit'>Submit</button>

             </form>
        </div>

            
        )
    }
}

