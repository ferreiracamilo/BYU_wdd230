// Check if the visit count exists in localStorage
if (localStorage.getItem('visitCount')) {
    // If it exists, retrieve and increment it
    let visitCount = parseInt(localStorage.getItem('visitCount'));
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = visitCount;
} else {
    // If it doesn't exist, initialize it to 1 and store it in localStorage
    localStorage.setItem('visitCount', 1);
    document.getElementById('visitCount').textContent = 1;
}