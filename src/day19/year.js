const centuryFromYear = (num) => {
  const twoDigitYear = num / 100;
  return num % twoDigitYear ? ~~twoDigitYear + 1 : twoDigitYear;
};

console.log(centuryFromYear(1905)); //20
console.log(centuryFromYear(1900)); //19
export default centuryFromYear;
