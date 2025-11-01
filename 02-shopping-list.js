function ShoppingList() {
    this.products = [];

    this.addProducts = function (product) {
        this.products.push(product);
    }

    this.showProducts = function () {
        this.products.forEach((item, idx) => {
            console.log(`${idx + 1}. ${item}`);
        });
    }
}

const myList = new ShoppingList();
myList.addProducts('Tablet');
myList.addProducts('Smartphone');
myList.addProducts('Monitor');
myList.showProducts();