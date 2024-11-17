// Given two strings s and t, return true if t is an
// anagram
// of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.

function isAnagram(s: string, t: string): boolean {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS === sortedT;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

// takes in two strings
// returns a boolean value indicating whether the first string is a valid anagram of the other strng
// sort both strings and compare them.
