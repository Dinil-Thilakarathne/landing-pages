const tabs = document.querySelectorAll('.header-nav-tab');
const highlight = document.querySelector('.highlight');
const firstTab = tabs[0];
var icon =document.getElementById("mode-change");

// Calculate the position of the highlight element
const left = firstTab.offsetLeft;
const width = firstTab.offsetWidth;

// Set the default position of the highlight element
highlight.style.left = `${left}px`;
highlight.style.width = `${width}px`;

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Get the index of the selected tab
    const index = this.dataset.index;
    
    // Calculate the position of the highlight element
    const left = this.offsetLeft;
    const width = this.offsetWidth;
    
    // Update the position of the highlight element
    highlight.style.left = `${left}px`;
    highlight.style.width = `${width}px`;
    
    // Add active class to the selected tab
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
  });
});




icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(icon.className=="fa-solid fa-moon"){
        icon.className="fa-solid fa-sun"; 
    }else{
        icon.className="fa-solid fa-moon"; 
    }
}