const faveFoods = {
  breakfast: "Turkish breakfast 🍳",
  beverage: "orange juice 🍹",
  supper: "manti 🍲",
};

const { breakfast, beverage, supper } = faveFoods;

const paragraph = `<p>For breakfast, I only like ${breakfast}. For beverage I love ${beverage}, and for supper I want usually ${supper}.</p>`;

document.getElementById("meals").innerHTML = paragraph;
