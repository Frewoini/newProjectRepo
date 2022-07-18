const itemsController = new ItemsController(0)

//let item;
// function loadStorageSampleData(){
//     if(!localStorage.getItem("items")){
//         itemsController.addItem('hinsance',"img","tv",2000)
        
        
//       itemsController.setLocalStorage();
//     }
// }
// loadStorageSampleData();
const makeRequest = async () => {
  let response = await fetch("http://localhost:8080/item/all");
  // if the response is bad
  if (!response.ok) {
    throw new Error(`There is an error with status ${response.status}`);
  }
  let itemJson = response.json();
  console.log(itemJson);

  return itemJson;
};

const addItemCard = async(item)=>{
  let listItems =document.getElementById('list-items')
  let items = await makeRequest();
  console.log(items);
  
     //itemsController.loadLocalStorage();
     items.forEach((item)=>{
        const itemHTML = `<div class="card" style="width: 20rem;">
        <div class="card-body"> 
      <h5 class="card-title"> ${item.name}</h5>
      <img src= ${item.imageURL} width="300" height="250"  alt="product image"> 
      <p class="card-text">${item.description}</p>
      <p class="card-text"><span>$</span> ${item.price}</p>
  <a href="#" class="btn ">Edit</a>&nbsp&nbsp<a href="#" class="btn ">Delete</a>

  </div>
</div>` 
listItems.innerHTML += itemHTML;
     })
    
        


}
 addItemCard();
//  makeRequest();