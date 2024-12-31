
//SCREEN SIZING
let screenWidth, screenHeight;
function updateScreenSize() {// get screen size
    screenWidth = window.innerWidth; 
    screenHeight = window.innerHeight; 
}
window.onload = updateScreenSize;//update screen size is called when page is loaded. 
window.onresize = updateScreenSize;//update screen when window is resized



//MOVIE CODE
const movieItems = document.querySelectorAll('.movie-list li');
const genreText = document.querySelector('.genre-text');

movieItems.forEach((item) => {
    item.addEventListener('mouseenter', () => { //genre from the data attribute
        const genre = item.getAttribute('data-genre');
        genreText.textContent = genre; //display text
    });
    item.addEventListener('mouseleave', () => {
        genreText.textContent = ''; // clear genre display
    });
});
