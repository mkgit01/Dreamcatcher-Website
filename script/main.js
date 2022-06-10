// Preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})


const menuSlide = () =>{
    const menubtn = document.querySelector('.menu');
    const sbmenubtn = document.querySelector('.sbmenu');
    const sidebar = document.querySelector('.sidebar')
    
    menubtn.addEventListener('click',() => {
        sidebar.classList.toggle('sidebar-active')
    });
    sbmenubtn.addEventListener('click',() => {
        sidebar.classList.toggle('sidebar-active')
    });
}
menuSlide();

