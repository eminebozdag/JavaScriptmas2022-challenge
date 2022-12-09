const capitalizeWord = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

const toTitleCase = (str) => {
  return str
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");
};

console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
