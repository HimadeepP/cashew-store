let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function orderWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello, I want to order:\n";
    cart.forEach(item => {
        message += `${item.product} - ₹${item.price}\n`;
    });
    message += `Total: ₹${total}`;

    let phoneNumber = "919959433276"; 
    window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}