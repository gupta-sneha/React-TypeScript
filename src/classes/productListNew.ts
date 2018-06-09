import * as $ from 'jquery';
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
            // const div1: HTMLDivElement = document.createElement('div');
            // div1.className = 'col-12 col-sm-6 product-item';

            // const span1: HTMLHeadingElement = document.createElement('h3');
            // span1.textContent = item.title;           

            // const image: HTMLImageElement = document.createElement('img') as HTMLImageElement;
            // image.src = item.imgUrl;
            // image.className = 'rounded food-image';
            // const br2: HTMLBRElement = document.createElement('br');

            // const span2: HTMLSpanElement = document.createElement('span');
            // span2.textContent = item.price.toString();
            // const br3: HTMLBRElement = document.createElement('br');

            // const button1: HTMLButtonElement = document.createElement('button');
            // button1.textContent = "Add to Cart";
            // button1.className = 'btn btn-success';

            // button1.addEventListener('click', () => {
            //     this.cartItem.addToCart(item.id);
            // })

            // div1.appendChild(span1);
            // div1.appendChild(image);
            // div1.appendChild(br2);
            // div1.appendChild(span2);
            // div1.appendChild(br3);
            // div1.appendChild(button1);
            // document.querySelector('#container').appendChild(div1);

            const productDivJqueryEl: JQuery<HTMLDivElement> = $('<div />') as JQuery<HTMLDivElement>;
            productDivJqueryEl.addClass('col-12 col-sm-6 product-item');
            const productTitleEl : JQuery<HTMLHeadingElement> = $('<h3 />') as JQuery<HTMLHeadingElement>;
            const productImageEl : JQuery<HTMLImageElement> = $('<img />') as JQuery<HTMLImageElement>;
            const productPriceEl: JQuery<HTMLParagraphElement> = $('<p />') as JQuery<HTMLParagraphElement>;
            const addProductBtnEl : JQuery<HTMLButtonElement> = $('<button />') as JQuery<HTMLButtonElement>;

            productTitleEl.text(item.title);
            productImageEl.attr('src', item.imgUrl);
            productImageEl.addClass("img-fluid rounded");
            productPriceEl.text(item.price.toString());
            addProductBtnEl.text("Add to Cart");
            addProductBtnEl.addClass("btn btn-success");

            addProductBtnEl.on('click', () => {
                this.cart.addToCart(item.id);
            });

            productDivJqueryEl.append(productTitleEl);
            productDivJqueryEl.append(productImageEl);
            productDivJqueryEl.append(productPriceEl);
            productDivJqueryEl.append(addProductBtnEl);

            this.productListContainer.append(productDivJqueryEl);
        })
    }
}