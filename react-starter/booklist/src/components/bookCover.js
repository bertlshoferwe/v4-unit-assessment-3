import React, { Component } from 'react';
import '../App.css';

class BookCover extends Component {
  constructor() {
    super();
  }

  render() {

    const { data, addToCart, query } = this.props;

    return (
      <div className='coverWrapper'>
        {
          data
            .filter(d => (d.title.toLowerCase()).includes(query.toLowerCase()))
            .map(filteredData => (
              <div key={ filteredData.id } className='cover' onClick={ () => { addToCart(filteredData); } }>
                <img className='coverImage' src={ filteredData.img } alt={ filteredData.title } />
                <p className='coverTitle '>{ filteredData.title }</p>
              </div>
            ))
        }
      </div>
    );
  }
}



export default BookCover;

