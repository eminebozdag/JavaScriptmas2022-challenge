const getRandomNumberOfTacos = () => {
  return new Array(Math.floor(Math.random() * 10) + 1).fill("🌮");
};

const putTacosOnTray = () => {
  return getRandomNumberOfTacos()
    .map((taco) => {
      return `<div class="taco">${taco}</div>`;
    })
    .join("");
};

document.getElementById("tray").innerHTML = putTacosOnTray();
