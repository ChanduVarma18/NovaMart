document.addEventListener("DOMContentLoaded", () => {
    const fashionProducts = [
        { id: 1, name: "Men's Jacket", category: "mens", price: 3999, image: "../assets/mens-jacket.jpg" },
        { id: 2, name: "Men's Shoes", category: "mens", price: 2499, image: "../assets/mens-shoes.jpg" },
        { id: 3, name: "Women's Dress", category: "womens", price: 2999, image: "../assets/womens-dress.jpg" },
        { id: 4, name: "Women's Handbag", category: "womens", price: 1999, image: "../assets/womens-bag.jpg" }
    ];

    const productList = document.getElementById("fashion-products");

    function displayProducts(category) {
        productList.innerHTML = ""; // Clear previous products

        fashionProducts
            .filter(product => product.category === category)
            .forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(productDiv);
            });
    }

    window.filterFashion = (category) => {
        displayProducts(category);
    };
});
