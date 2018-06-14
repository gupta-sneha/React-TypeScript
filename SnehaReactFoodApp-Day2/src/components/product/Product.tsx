import * as React from 'react';
import IProduct from '../../models/product';

interface Iprops {
    item: IProduct,
    onAddToCart: Function
}

const Product: React.SFC<Iprops> = ({ item, onAddToCart }: Iprops) => {
    const onClickEvent = () => {
        onAddToCart(item.id);
    }

    return (
        <div className="col-6 product">
            <div className="card bg-info">
                <img className="card-img-top" src={item.imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">
                        {item.title}
                    </h5>
                    <p className="card-text">
                        {item.description}
                    </p>
                    <p className="card-text">
                        {item.price}
                    </p>
                    <div>
                        <button className="btn btn-success"
                            onClick={onClickEvent}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*class Product extends React.Component<Iprops>{

    public render() {
        return (
            <div className="col-6 product">
                <div className="card bg-info">
                    <img className="card-img-top" src={this.props.item.imageUrl} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.item.title}
                        </h5>
                        <p className="card-text">
                            {this.props.item.description}
                        </p>
                        <p className="card-text">
                            {this.props.item.price}
                        </p>
                        <div>
                            <button className="btn btn-success"
                                onClick={addToCart.bind(this, this.props.item)}>
                                Add To Cart
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}*/

export default Product;