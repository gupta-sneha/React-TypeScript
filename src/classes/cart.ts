import { ICart } from '../models/cartItem';
import {IProduct } from '../models/product'

export class Cart {
    private items: Array<ICart> = [];

    constructor(public products: Array<IProduct>) { }

    addToCart(productId: number) {

        const cartItem: ICart = {
            id: this.items.length + 1,
            productId: productId,
            quantity: 1
        }

        this.items.push(cartItem);

        this.renderCartBox();
    }

    getCartItems() {
        const selectedProductContainer: HTMLDivElement = document.
            querySelector('.selected-product-item') as HTMLDivElement;

        selectedProductContainer.innerHTML = "";

        this.items.forEach((item) => {

            const selectedProduct = this.products.find(product => product.id == item.productId);

            const div1: HTMLDivElement = document.createElement('div');

            const span1: HTMLSpanElement = document.createElement('span');
            span1.textContent = selectedProduct.title;

            const span2: HTMLSpanElement = document.createElement('span');
            span2.textContent = selectedProduct.price.toString();

            div1.appendChild(span1);
            div1.appendChild(span2);
            selectedProductContainer.appendChild(div1);
        })
    }

    getTotalNumberOfItems(): number {
        return this.items.length;
    }

    renderCartBox() {
        const numberOfItems: HTMLSpanElement = document.querySelector('#numberOfItems') as HTMLSpanElement;
        numberOfItems.textContent = this.items.length.toString();
    }
}