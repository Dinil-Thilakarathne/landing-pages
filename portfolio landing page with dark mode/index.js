const  themeChangeIcon = document.getElementById("themeChangeIcon");
const  mobileNavIcon = document.getElementById("mobileNavIcon");
const headerNavList = document.getElementById("headerNavList");
const heroSection = document.getElementById("heroSection");
 

//theme change 
themeChangeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      themeChangeIcon.classList.remove('fa-moon');
      themeChangeIcon.classList.add('fa-sun');
    } else {
      themeChangeIcon.classList.remove('fa-sun');
      themeChangeIcon.classList.add('fa-moon');
    }
});

// mobile navigation 
mobileNavIcon.onclick = function(){
    if(mobileNavIcon.className=="fa-solid fa-bars"){
        mobileNavIcon.className="fa-solid fa-close";
        headerNavList.style.display = "flex";
        headerNavList.style.transform = "translateX(10px)";
        heroSection.style.transition = "all 0.5s ease";
        heroSection.style.filter = "blur(5px)";
    }else{
        mobileNavIcon.className="fa-solid fa-bars";
        headerNavList.style.display = "none";
        headerNavList.style.transform = "translateX(200%)";
        heroSection.style.filter = "blur(0)";
    }
}
  
