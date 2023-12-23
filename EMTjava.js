// Function to handle scrolling to a section with an offset
function scrollToSection(id) {
    var yOffset = -100; // Adjust the offset as needed
    var element = document.getElementById(id);
    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Check for hash in URL and scroll to the section with an offset
window.onload = function() {
    var hash = window.location.hash.substring(1);
    if (hash) {
        scrollToSection(hash);
    }
};