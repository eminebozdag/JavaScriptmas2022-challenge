const insertDashes = (arr) => {
  return arr
    .split(" ")
    .map((word) => [...word].join("-"))
    .join(" ");
};

//result : "a-b-a c-a-b-a"

export default insertDashes;
