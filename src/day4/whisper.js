const whisper = (sentence) => {
  return `shh... ${sentence.toLowerCase().replace(/!$/, "")}`;
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
