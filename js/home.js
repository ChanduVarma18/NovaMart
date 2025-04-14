document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", function () {
            const page = this.getAttribute("data-page");
            if (page) {
                window.location.href = "pages/" + page; // Ensure correct path
            }
        });
    });
});
