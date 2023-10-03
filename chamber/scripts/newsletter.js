const popupOverlay = document.getElementById('popup-overlay');
const closePopupButton = document.getElementById('close-popup');

// Show the pop-up when the page loads
window.addEventListener('load', () => {
    popupOverlay.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Prevent the form from submitting for this example
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    popupOverlay.style.display = 'none';
});