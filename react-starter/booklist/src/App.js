import React, { Component } from 'react';
import './App.css';
import data from './data/data';
import BookCover from './components/bookCover';
import CartList from './components/cartList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart:[],
      data: [],
      searched:''
    };

    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.clearSearched = this.clearSearched.bind(this);

  }

  componentDidMount(){
    this.setState({
      data: data,
    } );
  }

  addToCart(newBook) {

    this.setState({
      cart: [...this.state.cart, newBook]
    });

  }

  clearCart() {

    this.setState({
      cart: []
    });

  }

  clearSearched() {

    this.setState({
      searched: ''
    });

  }

  handleChange(e) {

    this.setState({
      searched: e.target.value
    });

  }

  render() {

    const clearShelf = ( this.state.cart.length > 0 )? <button onClick={ this.clearCart } > Clear Shelf </button> : <div/>;

    return (
      <div className='contentWrapper'>
        <div className='title'>
          <h1>Bookist</h1>
        </div>
        <div className='content'>

          <div className='search'>

            <input name="firstName" onChange={ (e) => {this.handleChange(e); } } value={this.state.searched} />

            <button onClick={ this.clearSearched } > Clear Search </button>

          </div>

          <div className='bookWrapper'>

            <BookCover data={ this.state.data } query={this.state.searched} addToCart={ this.addToCart } />

            <div className='cart'>

              <h2> Your Shelf</h2>

              {clearShelf}

              <CartList data={ this.state.cart } />

            </div>

          </div>


        </div>


      </div>
    );
  }
}



export default App;

