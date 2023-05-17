// Function to toggle visibility of an element
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Function to show a message when a button is clicked
function showMessage() {
    alert('Hello! This is my resume website.');
}

// Add event listeners to elements
document.getElementById('toggleButton').addEventListener('click', function() {
    toggleVisibility('experienceDetails');
});

document.getElementById('showMessageButton').addEventListener('click', showMessage);
