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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function caritem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1,100)
  }
}

function generatecartdescription() {
  var cartDescription = 'In your cart, you have'
  if ( getcart().length >= 1 ) {
    cartDescription += '${getCart()[0].itemName} at $${getCart()[0].itemPrice}'
  }
  if ( getCart().length >= 2) {
    var middleCartDescription = ''
    for (var i=1; i<getCart().length - 1; i++ ) {
      middleCartDescription += ', $(getCart()[i].itemName} at $${getCart()[i].itemPrice}'
    }
    cartDescription += '${middleCartDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().legnth'
    }
  }
}