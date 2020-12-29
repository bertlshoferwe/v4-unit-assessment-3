import React, { Component } from 'react';
import '../App.css';

class CartList extends Component {
    constructor() {
        super();
    }

    render() {

const { data } = this.props


let cart = data.map( ( data ) => 

        <div key={ data.id } >
            <p className='coverTitle '>{ data.title }</p>
        </div>

)



return (
            <div className='cartList' >
                { cart }

            </div>
        );
    }
}



export default CartList

