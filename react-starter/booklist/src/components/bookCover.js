import React, { Component } from 'react';
import '../App.css';

class BookCover extends Component {
    constructor() {
        super();
    }

    render() {

const { data, addToCart, query } = this.props


let coverData = (query.length === 0 )?data.map( ( data ) => 
                    <div key={ data.id } className='cover' onClick={ () => { addToCart(data) } }>
                        <img className='coverImage' src={ data.img } alt={ data.title } />
                        <p className='coverTitle '>{ data.title }</p>
                    </div>

                    )
                :
                    data.filter(d => d.title === query ).map(filteredData => (
                        <div key={ filteredData.id } className='cover' onClick={ () => { addToCart(filteredData) } }>
                            <img className='coverImage' src={ filteredData.img } alt={ filteredData.title } />
                            <p className='coverTitle '>{ filteredData.title }</p>
                        </div>
                    ))
                    
                                        

return (
            <div className='coverWrapper'>
                { coverData }

            </div>
        );
    }
}



export default BookCover

