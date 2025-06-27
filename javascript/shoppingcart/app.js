// let cart = JSON.parse(localStorage.getItem("cart")) || {};

// const product = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 35 },
//   { id: 3, name: "Product 3", price: 45 }
// ];

// const root = document.getElementById("root");
// const cartOutput = document.getElementById("cart-output");

// const showproduct = () => {
//   let html = "";
//   product.map(value => {
//     html += `
//       <div class="product">
//         <h3>${value.name}</h3>
//         <p>Price: $${value.price}</p>
//         <button onclick="addtocart(${value.id})">Add to Cart</button>
//       </div>
//     `;
//   });
//   root.innerHTML = html;
// };

// window.addtocart = (id) => {
//   if (cart[id]) {
//     cart[id]++;
//   } else {
//     cart[id] = 1;
//   }
//   updateCart();
// };

// window.increment = (id) => {
//   cart[id]++;
//   updateCart();
// };

// window.decrement = (id) => {
//   if (cart[id] > 1) {
//     cart[id]--;
//   } else {
//     delete cart[id];
//   }
//   updateCart();
// };

// window.clearCart = () => {
//   cart = {};
//   updateCart();
// };

// const updateCart = () => {
//   localStorage.setItem("cart", JSON.stringify(cart));
//   showcart();
// };

// const showcart = () => {
//   let str = `<div class="cart-summary"><h2>Cart</h2>`;
//   let total = 0;
//   product.forEach(value => {
//     const qty = cart[value.id];
//     if (qty) {
//       const subtotal = qty * value.price;
//       total += subtotal;
//       str += `
//         <p>
//           ${value.name} - $${value.price} × ${qty} = $${subtotal}
//           <button onclick="increment(${value.id})">+</button>
//           <button onclick="decrement(${value.id})">−</button>
//         </p>
//       `;
//     }
//   });

//   str += `<h3>Total: $${total}</h3></div>`;
//   cartOutput.innerHTML = str;
// };

// // On page load
// showproduct();
// showcart();

const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "T-Shirt", price: 300 },
  { id: 3, name: "Jeans", price: 1200 },
  { id: 4, name: "Trouser", price: 800 },
  { id: 5, name: "Jacket", price: 1500 }
];

// cart will store product id and quantity
let cart = {};

// render products with buttons
function renderProducts() {
  const container = document.getElementById("product-container");
  let html = "";
  products.forEach((item) => {
    const qty = cart[item.id] || 0;
    html += `
      <div class="product">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${qty}</p>
        <button onclick="increment(${item.id})">+</button>
        <button onclick="decrement(${item.id})">−</button>
      </div>
    `;
  });
  container.innerHTML = html;
}

// increase quantity
function increment(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderProducts();
}

// decrease quantity
function decrement(id) {
  if (cart[id]) {
    cart[id]--;
    if (cart[id] === 0) {
      delete cart[id];
    }
  }
  renderProducts();
}

// show cart summary
function showCart() {
  let html = `<h2>🧾 Cart Summary</h2>`;
  let total = 0;

  products.forEach(item => {
    const qty = cart[item.id];
    if (qty) {
      const subtotal = qty * item.price;
      total += subtotal;
      html += `<p>${item.name}: ₹${item.price} × ${qty} = ₹${subtotal}</p>`;
    }
  });

  html += `<hr><h3>Total Price: ₹${total}</h3>`;

  document.getElementById("cart-summary").innerHTML = html;
}

// Initial render
renderProducts();
