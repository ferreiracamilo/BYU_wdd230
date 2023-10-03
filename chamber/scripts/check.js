// JavaScript code for image navigation
const photos = document.querySelectorAll('.photo');
let currentPhotoIndex = 0;

function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.classList.remove('active-photo');
        if (i === index) {
            photo.classList.add('active-photo');
        }
    });
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
});