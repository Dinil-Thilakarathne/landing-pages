// Global variabels 
const subMenuIcons = document.querySelectorAll(".sub-menu-icon");
const subMenus = document.querySelectorAll(".sub-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenuCloseIcon = document.getElementById("mobile-menu-close-icon");
const headerNav = document.getElementById("header-nav");
const images = document.querySelectorAll(".content-client-img");

// mobile menu icon 
mobileMenuIcon.addEventListener("click", () => {
  console.log("click mobile icon ");
  mobileMenuIcon.classList.remove("show");
  mobileMenuIcon.classList.add("hidden");
  mobileMenuCloseIcon.classList.remove("hidden");
  mobileMenuCloseIcon.classList.add("show");
  headerNav.style.display = "inherit";
})

// mobilem menu close icon 
mobileMenuCloseIcon.addEventListener("click", () => {
  console.log("click on mobile close menu icon ");
  mobileMenuCloseIcon.classList.remove("show");
  mobileMenuCloseIcon.classList.add("hidden");
  mobileMenuIcon.classList.remove("hidden");
  mobileMenuIcon.classList.add("show");
  headerNav.style.display = "none";
})

// sub menu 
let prevIndex = null;

subMenuIcons.forEach((icon,index) => {
  icon.addEventListener("click", () => {
    if(prevIndex !== null){
      subMenuIcons[prevIndex].src = "images/icon-arrow-down.svg";
      subMenus[prevIndex].classList.add("hidden");
      subMenus[prevIndex].classList.remove("show");
    }

    if(index === prevIndex){
      prevIndex = null;
    }else{
      icon.src="images/icon-arrow-up.svg";
      subMenus[index].classList.remove("hidden");
      subMenus[index].classList.add("show");
      prevIndex= index;
    }
  })
})



// hero client img loader 
images.forEach((image, index) => {
  const delay = index * 1000;

  setTimeout(() => {
    image.style.opacity = 1;
    image.style.transform = "translateX(0)";
  },delay)

})
