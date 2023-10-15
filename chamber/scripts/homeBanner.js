// Function to close the banner
function closeBanner() {
    var banner = document.getElementById("banner");
    banner.style.display = "none";
}

// Function to determine when to show the banner
function shouldShowBanner() {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Display on Mon, Tue, and Wed
        var banner = document.getElementById("banner");
        banner.style.display = "block";
    }
}

// Make shouldShowBanner globally accessible to be call at newsletter.js after newsletter pop up is closed
window.shouldShowBanner = shouldShowBanner;