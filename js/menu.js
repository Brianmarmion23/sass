let btnMenu = document.getElementById('btnMenu'); 
let mainNav = document.getElementById('mainNav'); 
btnMenu.addEventListener('click', function(){
    mainNav.classList.toggle('mostrar');
});