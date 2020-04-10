var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
function showSlides() { 
    if (slideIndex === 0) {
        slides[slides.length - 1].style.display = "none"; 
    } else {
        slides[slideIndex - 1].style.display = "none"; 
    }
    slides[slideIndex++].style.display = "block";
    if (slideIndex === slides.length)   slideIndex = 0;
}
setInterval(showSlides, 3000);