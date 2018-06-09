import { IProduct } from '../models/product';
import { Cart } from './cart';
import {products} from '../data/products';

export class ProductList {
    private cartItem: Cart;

    constructor(private list: Array<IProduct>, public cart: Cart) {
        this.cartItem = cart;
    }
    renderList() {
        products.forEach((item: IProduct) => {
            const div1: HTMLDivElement = document.createElement('div');
            div1.className = 'product-item';

            const span1: HTMLSpanElement = document.createElement('span');
            span1.textContent = item.title;

            const image: HTMLImageElement = document.createElement('img') as HTMLImageElement;
            image.src = item.imgUrl;
            image.className = 'food-image';

            const span2: HTMLSpanElement = document.createElement('span');
            span2.textContent = item.price.toString();

            const button1: HTMLButtonElement = document.createElement('button');
            button1.textContent = "Add to Cart";

            button1.addEventListener('click', () => {
                this.cartItem.addToCart(item.id);
            })

            div1.appendChild(span1);
            div1.appendChild(image);
            div1.appendChild(span2);
            div1.appendChild(button1);
            document.querySelector('#container').appendChild(div1);
        })
    }
}