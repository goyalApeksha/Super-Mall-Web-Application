document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const body = document.body;

    // Make the modal visible and blur the background
    body.classList.add("modal-active");

    // Handle form submission
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Assuming login validation is successful
        alert("Login successful!");
        
        // Remove blur and hide modal
        body.classList.remove("modal-active");
        loginModal.style.display = "none";
    });
});
