const panic = (sentence) => {
  return sentence.trim().toUpperCase().split(" ").join(" 😱 ") + "!";
};

console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("winter"));
