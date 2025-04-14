document.addEventListener("DOMContentLoaded", function () {
    // Sign-up Functionality
    document.getElementById('signupForm')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let newUsername = document.getElementById('newUsername').value;
        let newPassword = document.getElementById('newPassword').value;

        if (newUsername && newPassword) {
            localStorage.setItem("registeredUser", newUsername);
            localStorage.setItem("registeredPass", newPassword);
            alert("Signup successful! Please log in.");
            window.location.href = "index.html"; // Redirect to login page
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Login Functionality
    document.getElementById('loginForm')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let storedUser = localStorage.getItem("registeredUser");
        let storedPass = localStorage.getItem("registeredPass");

        if (username === storedUser && password === storedPass) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "home.html"; // Redirect to Home Page
        } else {
            alert("Invalid Username or Password");
        }
    });

    // Logout Functionality
    document.getElementById('logoutButton')?.addEventListener('click', function () {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html"; // Redirect to Login Page
    });

    // Prevent Unauthorized Access to Home Page
    if (window.location.pathname.includes("home.html")) {
        const isLoggedIn = localStorage.getItem("loggedIn");
        if (!isLoggedIn) {
            window.location.href = "index.html"; // Redirect to login page if not logged in
        }
    }
});
