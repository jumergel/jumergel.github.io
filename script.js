
//SCREEN SIZING
let screenWidth, screenHeight;
function updateScreenSize() {// get screen size
    screenWidth = window.innerWidth; 
    screenHeight = window.innerHeight; 
}
window.onload = updateScreenSize;//update screen size is called when page is loaded. 
window.onresize = updateScreenSize;//update screen when window is resized
window.onload = loadHeader();

function loadHeader() {
    fetch('../header.html')  // Replace with the correct path to header.html
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Failed to load header.html');
            }
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// // script.js
// //scrolling
// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll(".section");
//     let isScrolling;
  
//     window.addEventListener("scroll", () => {
//       clearTimeout(isScrolling);
  
//       // Set a timeout to detect when scrolling stops
//       isScrolling = setTimeout(() => {
//         snapToSection();
//       }, 100); // Adjust delay to wait before snapping
//     });
  
//     function snapToSection() {
//       const scrollPosition = window.scrollY;
//       const viewportHeight = window.innerHeight;
  
//       // Find the nearest section
//       let closestSection = sections[0];
//       let closestDistance = Math.abs(scrollPosition - sections[0].offsetTop);
  
//       sections.forEach((section) => {
//         const distance = Math.abs(scrollPosition - section.offsetTop);
//         if (distance < closestDistance) {
//           closestSection = section;
//           closestDistance = distance;
//         }
//       });
  
//       // Adjust snapping speed
//       closestSection.scrollIntoView({
//         behavior: "smooth", // Smooth scrolling animation
//       });
//     }
//   });
  
  
