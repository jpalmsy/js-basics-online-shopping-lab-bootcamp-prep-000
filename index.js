var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemname = cartitem(item)
 getCart().push(item)
 return '{$item.itemName} has been added to your cart.'
}

function viewCart() {
  return getcart.length === 0 ? "Your shopping cart is empty": generatecartdescription()
}

function total() {
  var sum = sumPrices ()
  return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searcgCartForItemToRemove(itemName)
  return itemtoRemove ? removeItemFromCart(itemToRemove): notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return "Sorry, we dont have a credit card on file for you." 
  } else {
    var sumToCharge = total()
    setCart ([])
    return 'Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.'
  }
  }

