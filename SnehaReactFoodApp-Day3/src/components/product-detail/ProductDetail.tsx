import * as superagent from 'superagent';
import * as React from 'react';
import IProduct from '../../models/product';

interface IProps {
    match: {
        params: {
            productId: string
        }
    }
}

interface IState {
    product: IProduct;
}

class ProductDetails extends React.Component<IProps>{

    public state: Readonly<Partial<IState>> = {
        product: undefined
    }

    public componentWillMount() {
        const url = 'http://5b209237ca762000147b255b.mockapi.io/products/' + this.props.match.params.productId;

        superagent
            .get(url)
            .end((err: superagent.ResponseError, res: superagent.Response) => {
                this.setState({
                    product: res.body
                });
            });
    }

    public render() {
        return (
            <div>
                <h3> These are details of product:</h3>
                <img src={this.state.product ? this.state.product.imageUrl : 'No Product'} />
                <p>Product Description : {this.state.product ? this.state.product.description : 'No Product'}</p>
                <p>Price : {this.state.product ? this.state.product.price : 'No Product'}</p>
            </div>
        )
    }
}

export default ProductDetails;