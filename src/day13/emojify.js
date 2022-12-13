const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

const emojifyWord = (word) => {
  let eWord =
    word.startsWith(":") && word.endsWith(":") ? word.slice(1, -1) : word;
  return emojis[eWord] ? emojis[eWord] : eWord;
};

const emojifyPhrase = (phrase) => {
  return phrase
    .split(" ")
    .map((word) => emojifyWord(word))
    .join(" ");
};

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
