import React, { Component } from 'react';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <h1><b><u>APPLIANCES</u></b></h1>


                <h1>Refrigerator</h1>
                <Refrigerator name="Samsung" type="Refrigerator" price="$20000" img="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmVmcmlnZXJhdG9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Refrigerator name="Lg" type="Refrigerator" price="$50000" img="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnZXJhdG9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Refrigerator name="Goodrej" type="Refrigerator" price="$60000" img="https://images.unsplash.com/photo-1576759310319-aa88751eca50?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <h2>WASHING-MACHINE</h2>
                <Washmchn name="samsung" type="WASHING-MACHINE" price="$20000" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Qw4at3hnWzrr5VjoOCBplgOvpuTdgtGDPG_BNwpQ-kJXV5Y93HjEhrIp4PY&usqp=CAc" />
                <Washmchn name="Lg" type="WASHING-MACHINEr" price="$50000" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIDpm2agZfZ29PXOLStSF0a1ppmgiwkEfVw&usqp=CAU" />
                <Washmchn name="Goodrej" type="WASHING-MACHINE" price="$60000" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8j2DfephREsca4Szc7BGz2A4bBnBcVu-Nw&usqp=CAU" />

                <h2> LAPTOPS </h2>
                < Laptops name="Mac" type="Laptop" price="$20000" img="https://images.unsplash.com/photo-1613398773682-9e272a85f203?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Laptops name="Lenovo" type="Laptop" price="$50000" img="https://images.unsplash.com/photo-1542728929-19dcc468723f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Laptops name="Dell" type="Laptop" price="$60000" img="https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGxhcHRvcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

            </div>


        )
    }
}
function Refrigerator(props) {
    return (
        <div class="gallery" >
            <div id='items'>
                <img src={props.img} height="200px" width="200px"></img>
                
                <h5>BrandName:{props.name}</h5>
                <h5>Brandtype:{props.type}</h5>
                <h5>BrandPrice:{props.price}</h5>
            </div>
            
        </div>

    )
}

const Washmchn = (props) => {

    return (
        <div class="gallery" >
            <div id='items'>
                <img src={props.img} height="200px" width="200px"></img>
                <h5>BrandName:{props.name}</h5>
                {/* <h5>Brandtype:{props.type}</h5> */}
                <h5>BrandPrice:{props.price}</h5>
            </div>
        </div>

    )
}

function Laptops(props) {
    return (
        <div class="gallery" >
            <div id='items'>
                <img src={props.img}></img>
                <h5>BrandName:{props.name}</h5>
                <h5>Brandtype:{props.type}</h5>
                <h5>BrandPrice:{props.price}</h5>

            </div>
        </div>

    )
}
