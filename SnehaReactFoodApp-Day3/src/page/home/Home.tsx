import * as superagent from 'superagent';
import * as React from 'react';
import Progress from '../../components/Progress';
import ProductList from '../../components/product-list/ProductList';
import ICart from '../../models/cart-item';
import IProduct from '../../models/product';

interface IState {
    cart: ICart[];
    products: IProduct[];
    showLoader: boolean;
}

class Home extends React.Component {
    public state: Readonly<IState> = {
        cart: [],
        products: [],
        showLoader: true,
    }

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

    public componentWillMount(){
        this.getProducts();
    }

    public render() {
        let loaderComponent = null;
        if (this.state.showLoader) {
            loaderComponent = <Progress />
        }
        return (
            <React.Fragment>
                <ProductList list={this.state.products} renderCart={this.getCart} />
                {loaderComponent}
            </React.Fragment>
        )
    }
}

export default Home;