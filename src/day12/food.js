import "./index.css";
const dinnerFoods = ["🍝", "🍔", "🌮"];
const foods = document.querySelector("#menu");
const foodDivs = dinnerFoods.map((el) => `<div class="food">${el}</div>`);
foods.innerHTML = foodDivs.join("");
