const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// to disappear hamburger when bar toggle
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//to disappear hamburger when click on menu item link
document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))