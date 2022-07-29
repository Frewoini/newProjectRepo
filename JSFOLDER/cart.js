
const cartItem = document.querySelector(".cart-item");

 
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
  
     
    const cartHtml = `<img src="${item.imageURL}" alt="image">
    <div class="detail">
      <h3 class="name">${item.name}</h3>
      <p class="description"> ${item.description}</p>
      <span class="quantity">Quantity:1</span>
   <span class="price">${item.price}</span>
  </div>
   <div class="cancel" id="cancelBtn"><i class="fa-solid fa-trash"></i></div>`

     
         cartItem.innerHTML+=cartHtml;
     
   //cartItem.innerHTML+=cartHtml;
    
   let cancel = document.querySelector("#cancelBtn")
       console.log(cancel);
        let parent = cancel.parentNode
        console.log(parent);
    function removeFromCart(id){
        cancel.addEventListener('click',()=>{
          cancel.childNodes[item.id].remove()
        })
        
       
   } 
   removeFromCart();
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
