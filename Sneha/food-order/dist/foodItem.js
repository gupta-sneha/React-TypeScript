(function () {
    var Cart = /** @class */ (function () {
        function Cart(products) {
            this.products = products;
            this.items = [];
        }
        Cart.prototype.addToCart = function (productId) {
            var cartItem = {
                id: this.items.length + 1,
                productId: productId,
                quantity: 1
            };
            this.items.push(cartItem);
            this.renderCartBox();
        };
        Cart.prototype.getCartItems = function () {
            var _this = this;
            var selectedProductContainer = document.
                querySelector('.selected-product-item');
            selectedProductContainer.innerHTML = "";
            this.items.forEach(function (item) {
                var selectedProduct = _this.products.find(function (product) { return product.id == item.productId; });
                var div1 = document.createElement('div');
                var span1 = document.createElement('span');
                span1.textContent = selectedProduct.title;
                var span2 = document.createElement('span');
                span2.textContent = selectedProduct.price.toString();
                div1.appendChild(span1);
                div1.appendChild(span2);
                selectedProductContainer.appendChild(div1);
            });
        };
        Cart.prototype.getTotalNumberOfItems = function () {
            return this.items.length;
        };
        Cart.prototype.renderCartBox = function () {
            var numberOfItems = document.querySelector('#numberOfItems');
            numberOfItems.textContent = this.items.length.toString();
        };
        return Cart;
    }());
    var ProductList = /** @class */ (function () {
        function ProductList(list, cart) {
            this.list = list;
            this.cart = cart;
            this.cartItem = cart;
        }
        ProductList.prototype.renderList = function () {
            var _this = this;
            products.forEach(function (item) {
                var div1 = document.createElement('div');
                div1.className = 'product-item';
                var span1 = document.createElement('span');
                span1.textContent = item.title;
                var image = document.createElement('img');
                image.src = item.imgUrl;
                image.className = 'food-image';
                var span2 = document.createElement('span');
                span2.textContent = item.price.toString();
                var button1 = document.createElement('button');
                button1.textContent = "Add to Cart";
                button1.addEventListener('click', function () {
                    _this.cartItem.addToCart(item.id);
                });
                div1.appendChild(span1);
                div1.appendChild(image);
                div1.appendChild(span2);
                div1.appendChild(button1);
                document.body.appendChild(div1);
            });
        };
        return ProductList;
    }());
    var products = [
        {
            id: 1,
            title: 'Malabar Biriyani',
            imgUrl: 'https://i.imgur.com/ULHbPTa.jpg',
            price: 100
        },
        {
            id: 2,
            title: 'Pasta',
            imgUrl: 'https://i.imgur.com/r7rQBCS.jpg',
            price: 200
        },
        {
            id: 3,
            title: 'Chicken Fried Rice',
            imgUrl: 'https://i.imgur.com/pYSgtB4.jpg',
            price: 250
        },
        {
            id: 4,
            title: 'Chicken Noodles',
            imgUrl: 'https://i.imgur.com/6VY0ci9.png',
            price: 250
        }
    ];
    var cart = new Cart(products);
    var product = new ProductList(products, cart);
    product.renderList();
    var goToCartButton = document.querySelector('#goToCart');
    goToCartButton.addEventListener('click', function () {
        cart.getCartItems();
    });
})();
