// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:

//     1 <= s.length <= 3 * 105
//     s consist of printable ASCII characters.

function reverseVowels(s: string): string {
  const vowels = 'aeiouAEIOU';
  const sVowels = s
    .split('')
    .filter((char) => vowels.includes(char))
    .reverse();

  const output = s
    .split('')
    .map((char) => {
      if (vowels.includes(char)) {
        return sVowels.shift();
      } else {
        return char;
      }
    })
    .join('');

  console.log(output);
  return output;
}

console.log(reverseVowels('IceCreAm'));
console.log(reverseVowels('leetcode'));

// takes in a string
// returns the string with the vowels reversed.
// vowels = aeiouAEIOU
// create a variable for all the vowels and reverse it.
// itreate through the string.
// if the char is a vowel, swap it with the first character in the reversed vowel.
