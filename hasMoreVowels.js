const hasMoreVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let nonVowelCount = 0;
  const lowerCaseWord = word.toLowerCase();
  for (let i = 0; i < lowerCaseWord.length; i++) {
    const char = lowerCaseWord[i];
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      nonVowelCount++;
    }
  }

  return vowelCount > nonVowelCount;
};

console.log(hasMoreVowels("ukulele"));
