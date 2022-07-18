const itemsController = new ItemsController(0);
//let submit = document.getElementById('submit');
// Select the New Item Form
if(localStorage.getItem("items")){
  itemsController.loadLocalStorage();
  //addItemCard()
}
const newItemForm = document.querySelector('#newItemForm');

newItemForm.addEventListener('submit',(event)=>{
  event.preventDefault();
   // Select the inputs
   const newItemName = document.getElementById('newItemNameInput');
   const newItemDescription = document.getElementById('newItemDescription');
   const newItemImageUrl = document.getElementById('newItemImageUrl');  
   const newItemPrice = document.getElementById('newItemPrice');
   // Get the values of the inputs
   const name = newItemName.value;
   const description = newItemDescription.value;
   const imageURL = newItemImageUrl.value;
   const price = newItemPrice.value;
    // Add the item to the ItemsController
    
   //itemsController.loadItemsFromLocalStorage();
    itemsController.addItem(name,description, imageURL,price);
    //itemsController.loadItemsFromLocalStorage();
     itemsController.setLocalStorage();

     //addItemCard()
    newItemName.value = " ";
    newItemDescription.value = " ";  
    price.value = " ";
    imageURL.value = " ";

    
})