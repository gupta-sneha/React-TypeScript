import * as React from 'react';
import * as superagent from 'superagent';
import IProduct from '../../models/product';
import Product from "../product/Product";

interface IProps {
    list: IProduct[];    
    renderCart: Function;
}

class ProductList extends React.Component<IProps>{
    public addToCart = (productId: number) => {
        superagent.post('http://5b209237ca762000147b255b.mockapi.io/cart').send({
            productId,
            quantity: 1
        }).set('accept', 'json').end((err, res) => {
            alert('Added Successfully');
            this.props.renderCart();
        })
    }

    public render() {
        const products = this.props.list.map(p => {
            return (
                <Product
                    item={p}
                    key={p.id}
                    onAddToCart={this.addToCart} />
            )
        })
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

export default ProductList;