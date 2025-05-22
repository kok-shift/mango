const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

rl.question('Enter a string: ', (inputString) => {
  const lengthOfString = inputString.length;
  console.log(`Length of the string: ${lengthOfString}`);

  const start = inputString.indexOf("JavaScript");
  if (start !== -1) {
    const extractedWord = inputString.slice(start, start + "JavaScript".length);
    console.log(`Extracted word: ${extractedWord}`);
  } else {
    console.log("Word 'JavaScript' not found in the string.");
  }

  const replacedString = inputString.replace('JavaScript', 'JavaScript lab program');
  console.log(`New string after replacement: ${replacedString}`);

  const isStringPalindrome = isPalindrome(inputString);
  console.log(`Is the string a palindrome? ${isStringPalindrome}`);

  rl.close();
});