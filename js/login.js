// Switch Between Login and Signup Forms
document.getElementById("showSignup").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-form").classList.add("hidden");
    document.querySelector(".signup-form").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".signup-form").classList.add("hidden");
    document.querySelector(".login-form").classList.remove("hidden");
});
