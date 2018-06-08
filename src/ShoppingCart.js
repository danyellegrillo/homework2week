class ShoppingCart {
  constructor(items) {
    this.items = items
  }
  getItems(){
    const cart = [];
    return cart;
  }
  clear(){

  }
  clone(){
    return copyShoppingCart = [...ShoppingCart]
  }
}







module.exports = ShoppingCart
