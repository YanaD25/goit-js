const findLongestWord = function (string) {
  const oneWord = string.split(" ");
  let longestWord = oneWord[0];
  for (let i = 0; i < oneWord.length; i += 1) {
    if (longestWord.length <= oneWord[i].length) {
      longestWord = oneWord[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
