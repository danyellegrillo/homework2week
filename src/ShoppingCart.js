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
    this.items  = [];
  }


  clone(){
    const copyCarrinho = new ShoppingCart()
    copyCarrinho = [...this.carrinho]
  }
}

module.exports = ShoppingCart 
