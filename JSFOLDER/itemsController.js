
class ItemsController {
constructor(currentId = 0){
    this.items = [];
   this.currentId = currentId;
}

addItem(name,description,img,price){
    const item={
   id:this.currentId++,
   name:name,
   description:description,
   img:img,
   price:price
    }
    this.items.push(item);
    //localStorage.setItem("items", JSON.stringify(this.items));
}
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
   
}
// let tvItem = new ItemsController()
// tvItem.addItem('samsung','new tv','img',2000)
// console.log(tvItem.items)




