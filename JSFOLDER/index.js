
const newForm = document.querySelector("#myForm")
 

 newForm.addEventListener('submit',()=>{
    const userName = document.getElementById("username");
    const password = document.getElementById("password");
   
    const loginName = userName.value;
    
    const loginPassword = password.value;
if(loginName == 'admin' && loginPassword == "admin123"){
     
    location.href = "/./admin.html";
}else {
    alert("sorry,incorrect user name and password")
}

 })



    
        
    


