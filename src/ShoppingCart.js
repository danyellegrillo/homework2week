class ShoppingCart {
  constructor() {
    this.items = []
  }


  getItems(){
    return this.items;
  }


  addItem(itemName, quantity, price){
    const newArray = { }
    newArray.name = itemName
    newArray.quantity = quantity
    newArray.pricePerUnit = price
    this.items.push(newArray);

  }


  clear(){
    this.items  = []; // it doesn't need to return, only clean the car...
  }


  clone(){
    const copyItems = new ShoppingCart();//doing like the intruction, making a _new_ ShoppingCart
    copyItems.items = JSON.parse(JSON.stringify(this.items));// then accessing the copyItems.items and passagem a method that copy the other object
    return copyItems;
  }
}

module.exports = ShoppingCart
