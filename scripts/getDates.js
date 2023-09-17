document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Update the copyright year in the footer's first paragraph
    const copyrightYearElement = document.querySelector('#copyright-year');
    copyrightYearElement.textContent = "©"+currentYear;


    // Get the last modified date of the document
    const lastModifiedDate = new Date(document.lastModified);
    // Format the date as a string (e.g., "September 17, 2023")
    const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Use AM/PM format
    });
    // Update the last modified date in the second paragraph
    const lastModifiedElement = document.querySelector('#lastModified');
    lastModifiedElement.textContent = "Last modification: " + formattedLastModifiedDate;
});