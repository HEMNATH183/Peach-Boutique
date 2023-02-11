const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function auth(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  if(email=="admin@gmail.com"&& password=="admin123"){
    window.open('home.html');
    alert("Login Successfully")
  }
  else{
    alert("invalid user name password")
    return;
  }
}
