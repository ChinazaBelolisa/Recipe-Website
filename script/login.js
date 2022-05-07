document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    })
})



const button = document.querySelector('#signin-btn');
let users = "henry";
let pass = "password";



button.addEventListener('click', function(event){
    const userName = document.querySelector('#user').value;
    const passWord = document.querySelector('#pass').value;
    var link = document.querySelector("a");
    console.log(userName, passWord);
    if(userName!=users || pass != passWord){
        link.setAttribute("href",
        "login.html"); 
    } else {
        link.setAttribute("href", "index.html");
        console.log("working");
    }

})