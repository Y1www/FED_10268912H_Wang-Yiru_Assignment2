document.querySelector('.actions button:nth-child(1)').addEventListener('click', () => {
    window.location.href = 'payment.html';
});
 
document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".actions button:nth-child(2)"); // Select "Add to Cart" button
    addToCartBtn.addEventListener("click", function () {
        const item = {
            name: "iPhone 13 Pro Max",  // Update with actual name
            price: 730,
            image: "iphone_13_pro_max_graphite_256_1729071274_6ba5087f_progressive_thumbnail.jpg", // Update with actual image
            quantity: 1
        };
 
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
 
        alert("Item added to cart!");
    });
});