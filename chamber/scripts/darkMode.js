const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navElement = document.getElementById("navbar-container"); // Get all <nav> elements (returns a collection)

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode-body');
        navElement.classList.add('dark-mode-nav');
    } else {
        body.classList.remove('dark-mode-body');
        navElement.classList.remove('dark-mode-nav');
    }
});