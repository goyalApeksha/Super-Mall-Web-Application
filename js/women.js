document.addEventListener('DOMContentLoaded', () => {
    // Shop Now button scrolls to the collections section
    document.getElementById('shop-now-btn').addEventListener('click', () => {
        document.querySelector('.collections').scrollIntoView({ behavior: 'smooth' });
    });

    // Handle newsletter form submission
    document.querySelector('.newsletter form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
        // Add logic to send data to your server if needed
    });
});