const countVowelConsonant = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const total = str.split("").reduce((accumulator, currentValue) => {
    vowels.includes(currentValue) ? (accumulator += 1) : (accumulator += 2);
    return accumulator;
  }, 0);

  return total;
};

export default countVowelConsonant;
