const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

const reverseString = (arr) => {
  return arr.split("").reverse().join("");
};

const reverseStringsInArray = (arr) => {
  return arr.map((el) => reverseString(el)).join(". ");
};
