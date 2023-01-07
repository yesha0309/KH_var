// Write your code here...
import Http from "./Http";
const container = document.querySelector(".list");
const total = document.querySelector(".total");
const addProductForm = document.querySelector("form[name=add-product]");
const http = new Http("http://localhost:3000/products");
// const http = new Http(
//   "http://127.0.0.1:5500/JavaScript/Asynchronous%20Programming%20and%20Remote%20Data/Working%20with%20Remote%20Data/Using%20XMLHttpRequest%20for%20Sending%20Data/src/index.html?product=&price=0&addProductBtn="
// );

const Row = ({ product, price, id }) =>
  `<div class="product">
    <span class="prod-name">${product}</span>
    <span class="prod-cost">$${price}</span>
    <div class="delete-btn"><a href="#" name="delete-btn" data-id="${id}">X</a></div>
  </div>`;

const render = function (arr) {
  const elems = arr.map((e) => Row(e));
  const totalCost = arr.reduce((prev, curr) => prev + Number(curr.price), 0);

  container.innerHTML = elems.join("");
  total.innerHTML = Row({ product: "TOTAL", price: totalCost });
};

async function loadAndRender() {
  try {
    const { status, response } = await http.get();
    console.log(status);
    render(JSON.parse(response));
  } catch {
    alert("There was an error talking to the server!");
  }
}

loadAndRender();

// Add product and reload
addProductForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let product = e.target.elements.product;
  let price = e.target.elements.price;
  try {
    if (product.value !== "" && price.value !== 0) {
      await http.post(
        JSON.stringify({ product: product.value, price: Number(price.value) })
      );
      loadAndRender();
    }
  } catch {
    alert("There was an error storing data");
  } finally {
    product.value = "";
    price.value = 0;
  }
});

container.addEventListener("click", async function (e) {
  e.preventDefault();
  if (e.target.getAttribute("name") === "delete-btn") {
    let id = e.target.getAttribute("data-id");
    try {
      await http.delete(id);
      loadAndRender();
    } catch {
      alert("There was an error deleting data");
    }
  }
});
