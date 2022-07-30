
const cartItem = document.querySelector(".cart-wrapper");

 
const makeRequestItemOnCart = async(id)=>{
  let response = await fetch(`http://localhost:8080/item/${id}`);
  if (!response.ok) {
    throw new Error(`There is an error with status ${response.status}`);
  }
  let itemJson = response.json();
  //console.log(itemJson);

  return itemJson;
}

const renderItemOnCart = async function(id) {
  
  let item = await makeRequestItemOnCart(id);
  let itemCard = document.createElement("div");
   itemCard.classList.add('cart-item');
  itemCard.setAttribute("data-id",item.id);
    itemCard.innerHTML = `
    <img src="${item.imageURL}" alt="image">
    <div class="detail">
      <h3 class="name">${item.name}</h3>
      <p class="description"> ${item.description}</p>
      <input type="number" class="quantity" value="1">
   <span class="price">${item.price}</span>
  </div>
   <div class="cancel" id="cancelBtn"><i class="fa-solid fa-trash"></i></div>
   `

     
         cartItem.appendChild(itemCard);

         if(document.readyState === "loading"){
          document.addEventListener("DOMContentLoaded",ready)
         }else{
          ready()
         }
         function ready(){
          let cartRemoveButton = document.getElementsByClassName("cancel")
            for(let i=0;i<cartRemoveButton.length;i++){
              let button = cartRemoveButton[i];
              button.addEventListener('click',removeCartItem)
            }
            //to update quantity 
            let quantityInput = document.getElementsByClassName('quantity')
            for(let i=0;i<quantityInput.length;i++){
              let input = quantityInput[i];
              input.addEventListener('changed',quantityChange)
            }
         }
         function removeCartItem(event){
          let buttonClicked = event.target;
          let parent = buttonClicked.parentElement.parentElement;
            parent.remove();
            updateItem();
         }
         //quantity change 
         function quantityChange(event){
           let input = event.target
           if(isNaN( input.value) && input.value <=0){
            input.value=1;
           }
           updateItem();
         }
     
   //to update item 
  //  function updateItem(){
  //   let cartContent = document.getElementsByClassName('cart-wrapper')[0]
  //   let cartCards = cartContent.getElementsByClassName('cart-item')

  //   let total =0;
  //   for(let i=0;i<cartCards.length;i++){
  //       let cartCard = cartCards[i];
  //       let priceItem = cartCard.getElementsByClassName('price')[0];
  //       let price = parseFloat(priceItem.innerText.replace("$",""))
  //       let cartQuantity = cartCard.getElementsByClassName('quantity')[0];
  //       let quantity = cartQuantity.value 
  //      total= total+ (price *quantity);
  //      //total =Math.random(total*100)/100;
  //       document.getElementsByClassName('subtotal')[0].innerText = "$"+total;
  //   }
   
  //  }
  
  
}
function updateItem(){
  let cartContent = document.getElementsByClassName('cart-wrapper')[0]
  let cartCards = cartContent.getElementsByClassName('cart-item')
  
  let total =0;
  for(let i=0;i<cartCards.length;i++){
      let cartCard = cartCards[i];
      let priceItem = cartCard.getElementsByClassName('price')[0];
      let price = parseFloat(priceItem.innerText.replace("$",""))
      let cartQuantity = cartCard.getElementsByClassName('quantity')[0];
      let quantity = cartQuantity.value 
     total= total+ (price *quantity);
     //total =Math.random(total*100)/100;
      document.getElementsByClassName('subtotal')[0].innerText = "$"+total;
  }
 
 }
  
const cartIcon = document.querySelector(".fa-cart-shopping");
const wholeCartWindow = document.querySelector(".whole-cart-window");
wholeCartWindow.inWindow =0;

cartIcon.addEventListener('mouseover',()=>{
  if(wholeCartWindow.classList.contains('hide')){
    wholeCartWindow.classList.remove('hide')
  }
})
cartIcon.addEventListener('mouseleave',()=>{
  //if(wholeCartWindow.classList.contains('hide')){
    setTimeout(()=>{
      if(wholeCartWindow.inWindow===0){
        wholeCartWindow.classList.add('hide');
      }
    },500)
    
  //}
})
wholeCartWindow.addEventListener('mouseover',()=>{
  wholeCartWindow.inWindow =1;
})
wholeCartWindow.addEventListener('mouseleave',()=>{
  wholeCartWindow.inWindow =0
   wholeCartWindow.classList.add('hide')
})



 
//renderItemOnCart('${item.id}');
