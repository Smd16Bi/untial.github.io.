let burger = document.querySelector(".burger");
let navbar__list = document.querySelector(".navbar__list");

burger.addEventListener('click', ()=> {
   navbar__list.classList.toggle("open");
   burger.classList.toggle("open");
})