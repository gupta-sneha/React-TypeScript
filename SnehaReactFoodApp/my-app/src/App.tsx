import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';

import MiniCart from './components/mini-cart/MiniCart';
import ProductList from './components/product-list/ProductList';
import ICart from './models/cart-item';
import IProduct from './models/product';


interface IState {
  cart: ICart[];
  products: IProduct[];
}

class App extends React.Component {

  public state: Readonly<IState> = {
    cart: [],
    products: []
  }

 public componentWillMount() {
    const promise = axios.get('http://5b209237ca762000147b255b.mockapi.io/products');
    promise.then((response) => {
      this.setState({
        products: response.data
      })
    }, (err) => {
      console.log('error');
    })
  }

  constructor() {
    super({});
  }

  public render() {
    return (
      <div className="container">
        <nav className="site-header sticky-top row">

          <div className="col-4">
            <h3>Food App</h3>
          </div>
          <div className="col-4">
            <MiniCart cart={this.state.cart} />
          </div>
        </nav>
        <div className="container">
          <ProductList list={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
