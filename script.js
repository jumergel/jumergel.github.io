
let screenWidth, screenHeight;

// get screen size
function updateScreenSize() {
    screenWidth = window.innerWidth; 
    screenHeight = window.innerHeight; 
}

//update screen size is called when page is loaded. 
window.onload = updateScreenSize;

//update screen when window is resized
window.onresize = updateScreenSize;
