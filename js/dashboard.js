// Select navigation links and content areas
const tabs = document.querySelectorAll(".dashboard-navbar a");
const contents = document.querySelectorAll(".tab-content");

// Function to activate the clicked tab
tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));

        // Hide all content sections
        contents.forEach((content) => content.classList.add("hidden"));

        // Activate the clicked tab and corresponding content
        tab.classList.add("active");
        contents[index].classList.remove("hidden");
    });
});

// Wishlist Remove Buttons
document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });
});

// Edit Address
document.getElementById("edit-address").addEventListener("click", () => {
    const newAddress = prompt("Enter your new address:");
    if (newAddress) {
        document.getElementById("address-content").innerHTML = `
            <h2>Address Book</h2>
            <p>${newAddress}</p>
            <button id="edit-address">Edit Address</button>
        `;
    }
});
