document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const total = document.querySelector('.total');
    let cart = [];
 
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.closest('.product');
        const id = product.dataset.id;
        const name = product.querySelector('h2').textContent;
        const price = parseFloat(product.querySelector('p').textContent.replace('$',''));
 
        const item = cart.find(item => item.id === id);
        if (item) {
          item.quantity++;
        } else {
          cart.push({ id, name, price, quantity: 1 });
        }
        renderCart();
      });
    });
 
    function renderCart() {
      cartItems.innerHTML = '';
      let totalPrice = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
      });
      total.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
  });  
 
  function updateTotal() {
    let total = 0;
    document.querySelectorAll("#cart-body tr").forEach(row => {
      const unitPrice = parseFloat(row.querySelector(".unit-price").textContent.replace("$", ""));
      const quantity = parseInt(row.querySelector(".quantity").value);
      const totalPrice = unitPrice * quantity;
      row.querySelector(".total-price").textContent = `$${totalPrice.toFixed(2)}`;
      total += totalPrice;
    });
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
  }
 
  document.querySelectorAll(".quantity").forEach(input => {
    input.addEventListener("change", updateTotal);
  });
 
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function() {
      this.closest("tr").remove();
      updateTotal();
    });
  });
 
  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartBody = document.getElementById("cart-body");
    const cartTotal = document.getElementById("cart-total");
 
    function updateTotal() {
        let total = 0;
        document.querySelectorAll("#cart-body tr").forEach(row => {
            const unitPrice = parseFloat(row.querySelector(".unit-price").textContent.replace("$", ""));
            const quantity = parseInt(row.querySelector(".quantity").value);
            const totalPrice = unitPrice * quantity;
            row.querySelector(".total-price").textContent = `$${totalPrice.toFixed(2)}`;
            total += totalPrice;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
 
    function renderCart() {
        cartBody.innerHTML = "";
        cart.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td class="unit-price">$${item.price.toFixed(2)}</td>
                <td><input type="number" class="quantity" value="${item.quantity}" min="1" /></td>
                <td class="total-price">$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-btn" data-index="${index}">Delete</button></td>
            `;
            cartBody.appendChild(row);
        });
 
        document.querySelectorAll(".quantity").forEach((input, index) => {
            input.addEventListener("change", function () {
                cart[index].quantity = parseInt(this.value);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateTotal();
            });
        });
 
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
                updateTotal();
            });
        });
 
        updateTotal();
    }
 
    renderCart();
});