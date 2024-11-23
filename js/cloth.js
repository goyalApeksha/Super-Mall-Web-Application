function toggleImages(button) {
    // Find the div with the additional images in the same section as the button
    const section = button.parentElement;
    const moreImages = section.querySelector('.more-images');

    // Toggle the visibility of the additional images
    moreImages.classList.toggle('hidden');

    // Change button text based on visibility
    if (moreImages.classList.contains('hidden')) {
        button.textContent = 'View More';
    } else {
        button.textContent = 'View Less';
    }
}