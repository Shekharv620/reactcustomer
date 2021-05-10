import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Ram"
        }
    }

    update=()=>{
        this.setState({
            name:!this.state.name
        })

    }

    
   
        render() {
            return (
                <div>
                    
                    <h1>this is practice page</h1>
                    <h2>Name:{this.state.name}</h2>
                    
                    <button onClick={this.update}>
                        {this.state.name ? 'hide':'show'}
                        </button>
                        {this.state.name &&
                        <div>
                            <p>ye mera dil pyar 
                                ka deeqana aaao na ga</p>
                        </div> }
                </div>
            )
        }
    }
    


    // 


// const Hooks_demo =()=>
// {

// const[data,setData]=useState(0)

//     useEffect=(()=>{
//         console.log("callig useEffect!!!")
//     })




//         return ( 
//             <div>
//                 <h1>welcome to hooks</h1>
//                 <h2>{data}</h2>
//                 <button onClick={()=>setData(data+1)}>update</button>
//                 </div>
//         )
//  }

