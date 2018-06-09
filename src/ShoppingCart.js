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
    const copyItems = new ShoppingCart();
    copyItems.items = [...this.items]
    return copyItems;
  }
}

module.exports = ShoppingCart
