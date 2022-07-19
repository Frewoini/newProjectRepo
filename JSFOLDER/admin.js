const itemsController = new ItemsController(0);

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
function getItemDataId(e){
    var id = e.getAttribute('data-id');
    console.log(id);
};

const addItemCard = async(item)=>{
  let listItems =document.getElementById('list-items')
  let items = await makeRequest();
  console.log(items);
  
     //itemsController.loadLocalStorage();
     items.forEach((item)=>{
        let itemCard = document.createElement("div");
        itemCard.setAttribute("data-id",item.id);
        itemCard.classList.add("col-3","m-5")
        itemCard.innerHTML = `<div class="card" style="width: 18rem;">
            <h5 class="card-title"> ${item.name}</h5>
          <img src= ${item.imageURL} width="300" height="250"  alt="product image"> 
              <p class="card-text">${item.description}</p>
              <p class="card-text"><span>$</span> ${item.price}</p>
              <button data-id='${item.id}'; onclick="itemsController.update(${item.id})">Edit</button>&nbsp&nbsp<button data-id='${item.id}'; onclick="itemsController.delete(${item.id})">Delete</button> 
        
        
      </div>`
      // last step is to append each userCard that is created to the displayUser element so they will display on the page
      listItems.appendChild(itemCard);








        //const itemHTML = `<div class="card" style="width: 20rem;">
//         <div class="card-body"> 
//       <h5 class="card-title"> ${item.name}</h5>
//       <img src= ${item.imageURL} width="300" height="250"  alt="product image"> 
//       <p class="card-text">${item.description}</p>
//       <p class="card-text"><span>$</span> ${item.price}</p>
//   <a href="#" class="btn ">Edit</a>&nbsp&nbsp<a href="#" class="btn ">Delete</a>

//   </div>
// </div>` 
//listItems.innerHTML += itemHTML;
     })

    //  function followUser(e){
    //     var id = e.getAttribute('data-id');
    //     console.log(id);
    // }
    
        


}
 addItemCard();
//  makeRequest();