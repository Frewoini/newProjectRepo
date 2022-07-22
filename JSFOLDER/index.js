// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");

//Code language: JavaScript (javascript)
//And then you attach the submit event listener to the form by using the addEventListener() method:

// submitBtn.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();
    const redirectFunction= function () {
        if(username == "manna" && password == "manna") {
            window.location = "/admin.html";
 
        }
    } 
    
        
    


// const loginBtn = document.getElementById("loginButton");
// loginBtn.addEventListener("click", )

