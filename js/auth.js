document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const logoutButton = document.getElementById("logoutButton");

    // Handle User Signup
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            if (newUsername && newPassword) {
                localStorage.setItem("username", newUsername);
                localStorage.setItem("password", newPassword);
                alert("Signup successful! Please login.");
                window.location.href = "index.html"; // Redirect to login page
            } else {
                alert("Please fill all fields.");
            }
        });
    }

    // Handle User Login
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {
                localStorage.setItem("loggedIn", "true");
                alert("Login successful!");
                window.location.href = "home.html"; // Redirect to Homepage
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    // Handle Logout
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("loggedIn");
            alert("Logged out successfully!");
            window.location.href = "index.html"; // Redirect to Login
        });
    }

    // Redirect to login if user is not logged in
    if (window.location.pathname.includes("home.html") && localStorage.getItem("loggedIn") !== "true") {
        alert("You must log in first!");
        window.location.href = "index.html";
    }
});
