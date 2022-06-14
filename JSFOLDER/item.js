const itemsController = new ItemsController(0)

//let item;
function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        itemsController.addItem('hinsance',"img","tv",2000)
        
        // const sampleItems= [
        //     {'name':'hinsance',
        // 'img':'https://www.220-electronics.com/media/catalog/product/cache/63839e5937dc4e6e2267bf11009b0963/l/a/large02_4_2.jpg ',
        // 'description':'hinsence TV',
        //  'price':2000},
        // {'name':'SAMSUNG',
        // 'img':' ',
        // 'description':'SAMSUNG TV IS GOOD FOR LIFE',
        // 'price':3000},
        // {
        // 'name':'LG',
        // 'img':'',
        // 'description':'lG TV',
        //  'price':2000
        // }
    //];
      itemsController.setLocalStorage();
    }
}
loadStorageSampleData();
let listItems =document.getElementById('list-items')
function addItemCard(){
     itemsController.loadLocalStorage();
     itemsController.items.forEach((item)=>{
        const itemHTML = `<div class="card" style="width: 20rem;">
        <div class="card-body"> 
      <h5 class="card-title"> ${item.name}</h5>
      <img src= ${item.img} width="300" height="250"  alt="product image"> 
      <p class="card-text">${item.description}</p>
      <p class="card-text"><span>$</span> ${item.price}</p>
  <a href="#" class="btn ">Add to cart</a>
  </div>
</div>` 
listItems.innerHTML += itemHTML;
     })
    
        
//  const itemHTML = `<div class="card" style="width: 18rem;">
//  <img src= ${item.img} width="300" height="250"  alt="product image">
//  <div class="card-body">
//      <h5 class="card-title">${item.name}</h5>
//      <p class="card-text">${item.description}</p>
//      <p class="card-text">${item.price}</p>
//      <a href="#" class="btn btn-primary">Add</a>
//  </div>
// </div>`



}
addItemCard()

// if(localStorage.getItem("items")){
//     itemsController.loadItemsFromLocalStorage();
//     addItemCard(item);
// }
// function loadCardsListFromItemsController(){
//     for(let i = 0, size = itemsController.items.length; i < size ; i++){
//       item  = itemsController.items[i];
//         addItemCard(item);
//     }
// }

//itemsController.loadItemsFromLocalStorage();
//itemsController.loadLocalStorage();
//loadCardsListFromItemsController();