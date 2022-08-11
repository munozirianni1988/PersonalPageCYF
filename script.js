//photo carrousel
var photos;


photos = ['https://github.com/glengleniri/Photo/blob/main/MeandBook.jpg?raw=true', 'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", photos[0]);


document.getElementById('next').addEventListener('click', (event) => {
  photos.push(photos.shift());
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", photos[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  photos.unshift(photos.pop());
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", photos[0]);

});

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}