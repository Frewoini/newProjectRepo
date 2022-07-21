const itemsController = new ItemsController(0);


const form =document.getElementById("form");
  const showForm = ()=>{
    form.style.display = 'block';
  }

//let item;
// function loadStorageSampleData(){
//     if(!localStorage.getItem("items")){
//         itemsController.addItem('hinsance',"img","tv",2000)
        
        
//       itemsController.setLocalStorage();
//     }
// }
// loadStorageSampleData();
let listItems =document.getElementById('list-items')
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

const addItemCard = async()=>{
  // let listItems =document.getElementById('list-items')
  let items = await makeRequest();
  console.log(items);
  listItems.innerHTML = " ";
  
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
              <button id = "btn" data-id= '${item.id}' onclick = "showForm(), itemsController.displayOnForm(${item.id})">Edit</button>&nbsp&nbsp<button data-id='${item.id}'; onclick="itemsController.delete(${item.id})">Delete</button> 
        
        
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
          
  
//     }
 }

const submitUpdateForm = function(event){
    event.preventDefault();
    const name = document.getElementById("name");
    const description =document.getElementById("description");
    const image =document.getElementById("image");
    const price =document.getElementById("price");
const id = name.getAttribute("data-id");
            // itemsController.items = " ";
            
            let updatedItem = {
              updateId: name.getAttribute("data-id"),
             updateName: name.value,
            updateDescription: description.value,
             updateImg: image.value,
            updatePrice: price.value
            };
            console.log(itemsController);
           
            const itemHTML = `<div class="card" style="width: 20rem;"data-id="${updatedItem.updateId}>
        <div class="card-body"> 
      <h5 class="card-title"> ${updatedItem.updateName}</h5>
      <img src= ${updatedItem.updateImg} width="300" height="250"  alt="product image"> 
      <p class="card-text">${updatedItem.updateDescription}</p>
      <p class="card-text"><span>$</span> ${updatedItem.updatePrice}</p>
      <button id = "btn" data-id= '${updatedItem.updateId}' onclick = "showForm(), itemsController.displayOnForm(${updatedItem.updateId}})">Edit</button>&nbsp&nbsp<button data-id='${updatedItem.updateId}'; onclick="itemsController.delete(${updatedItem.updateId})">Delete</button> 

    
      </div>
      </div>` 
         itemsController.update({name:updatedItem.updateName,description:updatedItem.updateDescription,imageURL:updatedItem.updateImg,price:updatedItem.updatePrice,id:updatedItem.updateId})
          //itemsController.update(itemsController);
          listItems.innerHTML += itemHTML;
  
 
 
}
const updateBtn =document.getElementById("updatebtn");
updateBtn.addEventListener('click',submitUpdateForm);

 addItemCard();

//  makeRequest();