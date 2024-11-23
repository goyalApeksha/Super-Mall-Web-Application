document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('shop-now-btn').addEventListener('click', () => {
        document.querySelector('.categories-section').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.newsletter-section form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
    });
});