
class ItemsController {
constructor(currentId = 0){
    this.items = [];
   this.currentId = currentId;
}

addItem(name,description,imageURL,price){
    const item={
   id:this.currentId++,
   name:name,
   description:description,
   imageURL:imageURL,
   price:price
    }
    this.items.push(item);
    this.save({name, description,imageURL, price});
}
    //localStorage.setItem("items", JSON.stringify(this.items));

setLocalStorage(){
    localStorage.setItem("items", JSON.stringify(this.items))
    // localStorage.setItem("item", JSON.stringify(this.items));
     localStorage.setItem("currentId", JSON.stringify(this.currentId));
 }
loadLocalStorage(){
    this.items = JSON.parse(localStorage.getItem("items"))
    this.currentId = JSON.parse(localStorage.getItem('currentId'))
  }

// loadItemsFromLocalStorage() {
//     const storageItems = JSON.parse(localStorage.getItem("items"))
 
//     // if(storageItems){
//     //     const items = JSON.parse(storageItems)
//     //     for (let i = 0, size = items.length; i < size; i++) {
//     //         const item = items[i];
//     //         this.items.push(item);
//     //     }
//     // }
// }

save({name, description, imageURL, price}){
    const data = { name,  description, imageURL, price };

    fetch('http://localhost:8080/item/add', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

update({name, description, imageURL, price, id}){
    //TODO implement this method
    const data = { name,  description, imageURL, price,id};

    fetch(`http://localhost:8080/item/update/${id}`, {
    method: 'PUT', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    }).then(data=>addItemCard())
    .catch((error) => {
    console.error('Error:', error);
    });

} 

delete(id){
        fetch(`http://localhost:8080/item/${id}`,{
            method: 'DELETE', 
        
            
            }).then(response=>addItemCard())
        
      }

 async findById(id) {
            let response = await fetch(`http://localhost:8080/item/${id}`);
          
            if (!response.ok) {
              throw new Error(`There is an error with status ${response.status}`);
            }
            let itemJson = response.json();
            //console.log(itemJson);
          
            return itemJson;
          }

   async displayOnForm(id) {
           
            let items = await this.findById(id);
           // console.log(items);
          const name = document.getElementById("name");
          name.setAttribute("data-id",id);
                    const description =document.getElementById("description");
          const image =document.getElementById("image");
          const price =document.getElementById("price");

        
            name.value = items.name;
            description.value = items.description;
            image.value = items.imageURL;
            price.value = items.price;
     
    //    const updateName = name.value;
    //    const updateDescription = description.value;
    //    const updateImg = image.value;
    //    const updatePrice = price.value;
      
   }

     

    //TODO implement this method
}


// let tvItem = new ItemsController()
// tvItem.addItem('samsung','new tv','imageURL',2000)
// console.log(tvItem.items)





