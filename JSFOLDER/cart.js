const itemsController = new ItemsController(0)

const addToCart = document.getElementById("add-to-cart");

const displayOnCart = function(id){
    let cartItem = itemsController.displayOnCard(id);
  console.log(cartItem);
}

displayOnCart();
