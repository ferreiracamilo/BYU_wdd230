const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navElement = document.getElementById("navbar-container");

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode-body');
        navElement.classList.add('dark-mode-nav'); //nav bar will still be relevant against black background with a border line activated by this class
    } else {
        body.classList.remove('dark-mode-body');
        navElement.classList.remove('dark-mode-nav');
    }
});