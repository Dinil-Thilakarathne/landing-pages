const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const headerNav = document.getElementById("header-nav");
const modeChangeIcon = document.getElementById("mode-change-icon");


// Function to toggle mobile menu open and closed
function toggleMenu() {
    if(mobileMenuIcon.classList.contains("fa-bars-staggered")){
        mobileMenuIcon.classList.remove("fa-bars-staggered");
        mobileMenuIcon.classList.add("fa-xmark");
    }
    else{
        mobileMenuIcon.classList.remove("fa-xmark");
        mobileMenuIcon.classList.add("fa-bars-staggered");
    }
    headerNav.classList.toggle('open');
}
  
// Add event listener to menu toggle button
mobileMenuIcon.addEventListener('click', toggleMenu);

// scroller reveal 
animateElement = (element,origin,delay) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: '100px',
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
}

// animate element 
animateElement(".main-img","bottom",500);
animateElement(".bg-img","right",100);
animateElement(".hero-content","left",500);
animateElement(".social-icon-list","bottom",500);
animateElement(".card-1","left",500);
animateElement(".card-2","right",500);



modeChangeIcon.addEventListener("click" , () => {
    if(modeChangeIcon.classList.contains("fa-moon")){
        document.body.classList.toggle("dark-theme");
        modeChangeIcon.classList.remove("fa-moon");
        modeChangeIcon.classList.add("fa-sun");
    }else{
        document.body.classList.toggle("dark-theme");
        modeChangeIcon.classList.remove("fa-sun");
        modeChangeIcon.classList.add("fa-moon");

    }
})