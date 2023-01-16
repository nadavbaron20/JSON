class Product {
    price;
    productName;
    expDate;
    constructor(inputPrice, inputProductName, inputExpDate) {
        this.price = inputPrice;
        this.productName = inputProductName;
        this.expDate = inputExpDate;
    }
}

class Shop {
    products;
    constructor() {
        this.products = [];
        this.readMethod();
    }
    addProduct(product) {
        //prevent copies in non-ideal test:
        // if(!this.products.includes(product)) {
            this.products.push(product);
            this.saveCreateArray();
        // }
    }
    saveCreateArray() {
        localStorage.setItem('products',JSON.stringify(this.products));
    }
    readMethod() {
        if (localStorage.getItem('products') != null) { //if 'products' were found on the pc...
            this.products = JSON.parse(localStorage.getItem('products'));
        } else { //otherwise...
            this.saveCreateArray();
        }
    }
}

let vegShop = new Shop();
//non-ideal test:
// let tomato = new Product(10, 'Tomato', 10102222);
// let cucumber = new Product(15, 'Cucumber', 10102222);
// vegShop.addProduct(tomato);
// vegShop.addProduct(cucumber);
//ideal test:
document.getElementById('addProduct').addEventListener('click',()=>{
    let price = document.getElementById('price').value;
    let productName = document.getElementById('productName').value;
    let expDate = document.getElementById('expDate').value;
    let newProduct = new Product(price, productName, expDate);
    vegShop.addProduct(newProduct);
});