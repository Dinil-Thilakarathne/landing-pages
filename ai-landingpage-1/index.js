const menuBtn = document.getElementById("menu-btn");
const headerNav = document.getElementById("header-nav");

menuBtn.addEventListener("click", () => {
    if(headerNav.style.display === "none"){
        headerNav.style.display = "block";
        menuBtn.className = "fa-solid fa-close";
    }else{
        headerNav.style.display = "none";
        menuBtn.className = "fa-solid fa-bars";
    }
})