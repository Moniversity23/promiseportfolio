ww]www[ww-pwwwwwwwwwwww8wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwindow.addEventListener("scroll", function (){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    
});