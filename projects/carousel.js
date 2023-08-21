let slideshows = document.getElementsByClassName("slideshow-container");
let slideshowIndices = [];

for (let i = 0; i < slideshows.length; i++) {
  slideshowIndices.push(0);
}

start();

// Next/previous controls
function plusSlides(slideshowIndex, n) {
  showSlides(slideIndex += n);
}

function nextSlide(slideshowIndex){
    let slides = slideshows[slideshowIndex].querySelectorAll(".mySlides");
    slideshowIndices[slideshowIndex] =  (slideshowIndices[slideshowIndex] + 1) % slides.length
    //console.log(slides.length)
    showSlides(slideshowIndex);

}
function prevSlide(slideshowIndex){
    let slides = slideshows[slideshowIndex].querySelectorAll(".mySlides");
    console.log((slideshowIndices[slideshowIndex] - 1) % 3)
    slideshowIndices[slideshowIndex] =  (slideshowIndices[slideshowIndex] - 1)
    if (slideshowIndices[slideshowIndex] < 0) {slideshowIndices[slideshowIndex] = slides.length-1}
    showSlides(slideshowIndex);
}

// Thumbnail image controls
function currentSlide(slideshowIndex, n) {
  showSlides(slideIndex = n);
}

function showSlides(slideshowIndex) {
    let i;
    let slideshow = slideshows[slideshowIndex];
    let slides = slideshow.querySelectorAll(".mySlides ");
    //let slides = document.getElementsByClassName("mySlides");

    let slideIndex  = slideshowIndices[slideshowIndex];
    //console.log(slideIndex)

    if (slideIndex > (slides.length-1)) {slideshowIndices[slideshowIndex] = 0} 
    if (slideIndex < 0) {slideshowIndices[slideshowIndex] = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //console.log(slideIndex)

    slides[slideIndex].style.display = "block";
}

function start()
{
    for (let i = 0; i < slideshows.length; i++) {
        showSlides(i);
    }
}