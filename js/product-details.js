// Script for Product Details Page
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    const reviewButton = document.querySelector('.submit-review');

    // Thumbnail Click Event
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach((thumb) => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.src = thumbnail.src;
        });
    });

    // Submit Review Button
    reviewButton.addEventListener('click', () => {
        const reviewText = document.getElementById('review-text').value.trim();
        if (reviewText) {
            const reviewsSection = document.querySelector('.reviews');
            const newReview = document.createElement('div');
            newReview.classList.add('review');
            newReview.innerHTML = `<strong>Anonymous</strong><p>⭐⭐⭐⭐⭐</p><p>${reviewText}</p>`;
            reviewsSection.appendChild(newReview);
            document.getElementById('review-text').value = '';
            alert('Review submitted successfully!');
        } else {
            alert('Please write a review before submitting.');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cartKey = "shoppingCart"; // Key for localStorage
    const addToCartButton = document.querySelector(".add-to-cart");

    // Function to Load Cart from localStorage
    function loadCart() {
        const cart = localStorage.getItem(cartKey);
        return cart ? JSON.parse(cart) : [];
    }

    // Function to Save Cart to localStorage
    function saveCart(cart) {
        localStorage.setItem(cartKey, JSON.stringify(cart));
    }

    // Function to Add Item to Cart
    function addToCart(product) {
        const cart = loadCart();
        const productId = product.dataset.id;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: productId,
                name: product.dataset.name,
                price: parseFloat(product.dataset.price),
                quantity: 1
            });
        }

        saveCart(cart);
        alert("Product added to cart!");
    }

    // Event Listener for Add to Cart Button
    if (addToCartButton) {
        addToCartButton.addEventListener("click", () => {
            const product = addToCartButton.closest(".product");
            addToCart(product);
        });
    }
});
