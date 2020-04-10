var dropdownState = false; 
var nav = document.getElementsByClassName("nav");
function dropdownMenu() {    
    if (dropdownState === false) {        
        nav[0].style.display = "flex";
        dropdownState = true;
    } else {
        nav[0].style.display = "none";
        dropdownState = false;
    }    
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        nav[0].style.display = "flex";        
    } else {
        nav[0].style.display = "none";
        dropdownState = false;
    }
  }  
var x = window.matchMedia("(min-width: 835px)")
x.addListener(myFunction) // Attach listener function on state chang
