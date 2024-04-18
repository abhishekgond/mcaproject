
var loader = document.getElementsByClassName("preloader")[0];
var loadingDelay = 1000;  // 2000 ms

window.addEventListener("load",function()
{
    setTimeout(function(){
        loader.style.display = "none";
    }, loadingDelay);
   
});


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});