const findPrize = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "JACKPOT! 1 Million and a Yacht!");
  } else if (num % 3 === 0) {
    console.log(num, "Vacation!");
  } else if (num % 5 === 0) {
    console.log(num, "$100,000 bonus!");
  } else {
    console.log(num, ":(");
  }
};

const awardBonuses = () => {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  numbers.forEach((el) => findPrize(el));
};
awardBonuses();
