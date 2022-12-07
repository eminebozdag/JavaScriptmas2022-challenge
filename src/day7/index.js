const altCaps = (str) => {
  return str
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()))
    .join("");
};

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
