(function(){

    interface IProduct{
        id: number;
        title : string;
        price : number;
        imgUrl : string;
    }

    interface ICart{
        id: number;
        productId :number;
        quantity: number;
    }

    class Cart{
        private items: Array<ICart> = [];

        constructor(public products: Array<IProduct>){}

        addToCart(productId : number){           
            
            const cartItem: ICart = {
                id: this.items.length + 1,
                productId: productId,
                quantity: 1
            }           

            this.items.push(cartItem);

            this.renderCartBox();
        }

        getCartItems(){
            const selectedProductContainer: HTMLDivElement = document.
                querySelector('.selected-product-item') as HTMLDivElement;

            selectedProductContainer.innerHTML ="";

            this.items.forEach((item)=>{

                const selectedProduct = this.products.find(product => product.id == item.productId);                

                const div1: HTMLDivElement = document.createElement('div');
            
                const span1: HTMLSpanElement= document.createElement('span');    
                span1.textContent = selectedProduct.title;

                const span2: HTMLSpanElement= document.createElement('span');
                span2.textContent = selectedProduct.price.toString();                

                div1.appendChild(span1);
                div1.appendChild(span2); 
                selectedProductContainer.appendChild(div1);
            })
        }

        getTotalNumberOfItems(): number{
            return this.items.length;
        }

        renderCartBox(){
            const numberOfItems: HTMLSpanElement = document.querySelector('#numberOfItems') as HTMLSpanElement;
            numberOfItems.textContent = this.items.length.toString();
        }
    }

    class ProductList{
        private cartItem: Cart;

        constructor(private list: Array<IProduct>, public cart: Cart){
            this.cartItem = cart;
        }
        renderList(){
            products.forEach((item) => {
                const div1: HTMLDivElement = document.createElement('div');
                div1.className='product-item';

                const span1: HTMLSpanElement= document.createElement('span');    
                span1.textContent = item.title;

                const image: HTMLImageElement = document.createElement('img') as HTMLImageElement;
                image.src=item.imgUrl;
                image.className='food-image';

                const span2: HTMLSpanElement= document.createElement('span');
                span2.textContent = item.price.toString();

                const button1: HTMLButtonElement = document.createElement('button');
                button1.textContent = "Add to Cart";

                button1.addEventListener('click', () =>{
                    this.cartItem.addToCart(item.id);
                 })

                div1.appendChild(span1);
                div1.appendChild(image);
                div1.appendChild(span2);
                div1.appendChild(button1);
                document.body.appendChild(div1);
            })
        }
    }

    

    const products: Array<IProduct>=[
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
    ]

    const cart = new Cart(products);
    const product = new ProductList(products, cart);
    product.renderList();


    const goToCartButton: HTMLButtonElement = document.querySelector('#goToCart') as HTMLButtonElement;

    goToCartButton.addEventListener('click', ()=>{
        cart.getCartItems();
    })


})()