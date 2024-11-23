document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const subtotalEl = document.getElementById("subtotal");
    const taxesEl = document.getElementById("taxes");
    const totalEl = document.getElementById("total");

    // Update Total for a Single Item
    function updateItemTotal(item) {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector("input").value);
        const itemTotal = price * quantity;
        item.querySelector(".item-total-price").textContent = itemTotal.toFixed(2);
        updateCartSummary();
    }

    // Update Cart Summary
    function updateCartSummary() {
        let subtotal = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector("input").value);
            const price = parseFloat(item.dataset.price);
            subtotal += quantity * price;
        });
        const taxes = subtotal * 0.10; // Assuming 10% tax
        const total = subtotal + taxes;

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        taxesEl.textContent = `$${taxes.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }

    // Event Listeners for Quantity Buttons
    cartItems.forEach(item => {
        const decreaseBtn = item.querySelector(".decrease");
        const increaseBtn = item.querySelector(".increase");
        const quantityInput = item.querySelector("input");

        decreaseBtn.addEventListener("click", () => {
            if (quantityInput.value > 1) {
                quantityInput.value--;
                updateItemTotal(item);
            }
        });

        increaseBtn.addEventListener("click", () => {
            quantityInput.value++;
            updateItemTotal(item);
        });

        quantityInput.addEventListener("change", () => {
            if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }
            updateItemTotal(item);
        });

        // Remove Item Functionality
        item.querySelector(".remove-btn").addEventListener("click", () => {
            item.remove();
            updateCartSummary();
        });
    });

    // Initial Update of Summary
    updateCartSummary();
});
