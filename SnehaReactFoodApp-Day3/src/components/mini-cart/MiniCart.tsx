import * as React from 'react';
import ICart from '../../models/cart-item';

interface IProps{
    cart: ICart[];
}

const MiniCart: React.SFC<IProps> = ({cart}) =>{
    return (
            <span className="navbar-brand">
                You have {cart.length} items in you cart
            </span>
        )
}

/*class MiniCart extends React.Component<IProps>{
    public render(){
        return (
            <span>
                You have {this.props.cart.length} items in you cart
            </span>
        )
    }
}*/

export default MiniCart;