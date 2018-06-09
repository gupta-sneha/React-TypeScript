import {Cart} from './classes/cart';
import {products} from './data/products';
import{ProductList} from './classes/productList';

const cart = new Cart(products);
const product = new ProductList(products, cart);

product.renderList();

const goToCartButton: HTMLButtonElement = document.querySelector('#goToCart') as HTMLButtonElement;

goToCartButton.addEventListener('click', () => {
    cart.getCartItems();
})