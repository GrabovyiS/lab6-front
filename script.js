let hamburger = document.getElementById('section-1__lines');
let cross = document.getElementById('mobile-nav__cross');
let container = document.getElementById('mobile-nav')
hamburger.addEventListener('click', function(){
  container.classList.toggle('open')
  document.querySelector('body').classList.toggle('open')
})
cross.addEventListener('click', function(){
  container.classList.toggle('open')
  document.querySelector('body').classList.toggle('open')
})