document.getElementById("place-order-btn").addEventListener("click", function () {
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please complete the billing details before placing the order.");
        return;
    }

    alert("Thank you, " + name + "! Your order has been placed successfully.");
});
