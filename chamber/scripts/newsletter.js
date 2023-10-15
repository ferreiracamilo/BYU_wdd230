const popupOverlay = document.getElementById('popup-overlay');
const closePopupButton = document.getElementById('close-popup');

// Show the pop-up when the page loads
/*
window.addEventListener('load', () => {
    popupOverlay.style.display = 'block';
});
*/

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    shouldShowBanner(); //call homebanner if dayweek is the expected one
});

// Prevent the form from submitting for this example
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    popupOverlay.style.display = 'none';
});

// Check if this is the user's first visit to set the variable for HOME PAGE CALL TO ACTION
if (!localStorage.getItem('lastNewsletter')) {
    localStorage.setItem('lastNewsletter', new Date().getTime());
    popupOverlay.style.display = 'block';
}else {
    //There's a var called lastVisit within local storage so days diff will be checked
    const lastNewsletterTimestamp = parseInt(localStorage.getItem('lastNewsletter'));
    const currentTime = new Date().getTime();
    const timeDiffMillis = currentTime - lastNewsletterTimestamp;
    const timeDiffDays = Math.floor(timeDiffMillis / (1000 * 60 * 60 * 24));

    if (timeDiffDays >= 1) {
        popupOverlay.style.display = 'block';
    }
}