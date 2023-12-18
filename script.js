var nameElement = document.getElementById('name');

// Function to start the animation on hover
function startAnimation() {
    nameElement.style.animation = 'fall 10s infinite ease-in-out';
}

// Function to stop the animation when the mouse leaves
function stopAnimation() {
    nameElement.style.animation = '';
}

// Function to show an alert when clicking "CONTACT ME"
function showContactAlert() {
    alert('Feel free to contact me!'); 
}
