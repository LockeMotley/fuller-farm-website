const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const quantityInputs = document.querySelectorAll(".quantity-input");
const summary = document.getElementById("order-summary");
const totalDisplay = document.getElementById("estimated-total");
const formTotal = document.getElementById("form-total");

function updateOrderSummary() {
  const items = [];
  let total = 0;

  quantityInputs.forEach((input) => {
    const quantity = Math.max(0, Number.parseInt(input.value || "0", 10));
    const price = Number.parseFloat(input.dataset.price);
    const name = input.dataset.name;

    if (quantity > 0) {
      const lineTotal = quantity * price;
      total += lineTotal;
      items.push(`${name} × ${quantity} — $${lineTotal.toFixed(2)}`);
    }
  });

  if (items.length === 0) {
    summary.innerHTML = "<p>No eggs selected yet.</p>";
  } else {
    summary.innerHTML = `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  const formattedTotal = `$${total.toFixed(2)}`;
  totalDisplay.textContent = formattedTotal;
  formTotal.value = formattedTotal;
}

quantityInputs.forEach((input) => {
  input.addEventListener("input", updateOrderSummary);
});

updateOrderSummary();

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const pickupDate = document.querySelector('input[name="preferred_pickup_day"]');
if (pickupDate) {
  const today = new Date();
  const localISODate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  pickupDate.min = localISODate;
}
