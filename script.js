window.addEventListener("scroll", function (){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    
});
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation"); 
const navigationItems = document.querySelectorAll(".navigation a"); 

menuBtn.addEventListener("click", () =>  {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

const scrollBtn = document .querySelector(".scrollToTop-btn");

window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500)
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentelement.scrollTop = 0;
});

/*window.addEventListener("scroll", reveal);
function reveal() {
    let reveals = document.querySelector(".reveal");
    for (let i = 0; i < reveals.length; 1++) {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint ) {
            reveals[i].classList.add("active");
        }
        
    }
}*/