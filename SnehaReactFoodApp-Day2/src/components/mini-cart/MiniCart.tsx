import * as React from 'react';
import ICart from '../../models/cart-item';

interface IProps{
    cart: ICart[];
}

class MiniCart extends React.Component<IProps>{
    public render(){
        return (
            <span>
                You have {this.props.cart.length} items in you cart
            </span>
        )
    }
}

export default MiniCart;