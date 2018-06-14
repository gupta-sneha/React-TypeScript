import * as superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import MiniCart from './components/mini-cart/MiniCart';
import ProductList from './components/product-list/ProductList';
import Progress from './components/Progress';
import Home from './page/home/Home';
import About from './page/about/About';
import ICart from './models/cart-item';
import IProduct from './models/product';

interface IState {
  cart: ICart[];
  products: IProduct[];
  showLoader: boolean;
  getCart: Function
}

class App extends React.Component {

  public getProducts = () => {
    superagent
      .get('http://5b209237ca762000147b255b.mockapi.io/products')
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        this.setState({
          products: res.body
        });
        showloader: false
      });
  }

  public getCart = () => {
    superagent
      .get('http://5b209237ca762000147b255b.mockapi.io/cart')
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        this.setState({
          cart: res.body
        });
      });
  }

  getCartApi = () => {
    this.getCart();
  }

  public state: Readonly<IState> = {
    cart: [],
    products: [],
    showLoader: true,
    getCart: this.getCartApi
  }

  public componentWillMount() {
    this.getProducts();
    this.getCart();
  }

  constructor() {
    super({});
  }

  public render() {
    let loaderComponent = null;
    if (this.state.showLoader) {
      loaderComponent = <Progress />
    }

    return (
      <div className="container">
        <nav className="site-header sticky-top row">

          <div className="col-4">
            <h3>Food App</h3>
          </div>

          <div className="col-4">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <MiniCart cart={this.state.cart} />
          </div>
        </nav>

        <div className="container">

          <div className="row">
            <div className="col">
              <Route
                exact={true}
                path='/home'
                component={Home}
              />
              <Route
               // exact={true}
                path='/about'
                component={About}
              />
            </div>
          </div>

          <ProductList list={this.state.products} renderCart={this.state.getCart} />
          {loaderComponent}
        </div>
      </div>
    );
  }
}

export default App;