// Get elements
const modal = document.getElementById('modalLastVisit');
const modalMessage = document.getElementById('modalMessageLastVisit');
const closeModalBtn = document.getElementById('closeLastVisitModalBtn');

// Show modal
function showModal() {
    modal.style.display = 'block';
}

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Check if this is the user's first visit
if (!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', new Date().getTime());
    modalMessage.textContent = 'Welcome! Let us know if you have any questions.';
    showModal();
}else {
    //There's a var called lastVisit within local storage so days diff will be checked
    const lastVisitTimestamp = parseInt(localStorage.getItem('lastVisit'));
    const currentTime = new Date().getTime();
    const timeDiffMillis = currentTime - lastVisitTimestamp;
    const timeDiffDays = Math.floor(timeDiffMillis / (1000 * 60 * 60 * 24));

    if (timeDiffDays === 0) {
        modalMessage.textContent = 'Back so soon! Awesome!';
    } else {
        const dayText = timeDiffDays === 1 ? 'day' : 'days';
        modalMessage.textContent = `You last visited ${timeDiffDays} ${dayText} ago.`;
    }

    showModal();
}