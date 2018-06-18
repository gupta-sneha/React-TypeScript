import * as superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import MiniCart from './components/mini-cart/MiniCart';
import Home from './page/home/Home';
import About from './page/about/About';
import ICart from './models/cart-item';
import AddProduct from './components/add-product/AddProduct';
import ProductDetail from './components/product-detail/ProductDetail';

interface IState {
  cart: ICart[];
}

class App extends React.Component {

  public state: Readonly<IState> = {
    cart: []
  }

  public getCart = () => {
    superagent
      .get('https://5b209237ca762000147b255b.mockapi.io/cart')
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        this.setState({
          cart: res.body
        });
      });
  }

  componentWillMount() {
    console.log('inside componentWillMount');
    this.getCart();
  }

  public render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="col-4">
            <h2 className="navbar-brand">React Shopping</h2>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="nav-link" to="/add-product">Add Product</Link>
              </li>
            </ul>
          </div>
          <div>
            <MiniCart cart={this.state.cart} />
          </div>
        </nav>
        <div className="container margin-top-contr">
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
          <div>
            <Route
              path="/details/:productId"
              component={ProductDetail}
            />
            <div>
            <Route
              path="/add-product"
              component={AddProduct}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;