// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

//     1 <= s.length <= 15
//     s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//     It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function romanToIntP(roman: string): number {
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = map[roman[i]];
    const nextVal = map[roman[i + 1]];

    if (currentVal < nextVal) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
  }

  return result;
}

// console.log(romanToIntP('III')); // Output: 3
// console.log(romanToIntP('LVIII')); // Output: 58
// console.log(romanToIntP('MCMXCIV')); // Output: 1994

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

//   const map: { [key: string]: string[] } = {
//     '2': ['a', 'b', 'c'],
//     '3': ['d', 'e', 'f'],
//     '4': ['g', 'h', 'i'],
//     '5': ['j', 'k', 'l'],
//     '6': ['m', 'n', 'o'],
//     '7': ['p', 'q', 'r', 's'],
//     '8': ['t', 'u', 'v'],
//     '9': ['w', 'x', 'y', 'z'],
//   }

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

function letterCombinationsP(str: string): string[] {
  if (str.length === 0) return [];

  const map: { [key: string]: string[] } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const result: string[] = [];

  const backtrack = (combination: string, nextDigits: string) => {
    if (nextDigits.length === 0) result.push(combination);

    const digit = nextDigits[0];

    const letters = map[digit];

    if (letters) {
      for (const letter of letters) {
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  };

  backtrack('', str);

  return result;
}

// console.log(letterCombinationsP('23'));
// console.log(letterCombinationsP(''));
// console.log(letterCombinationsP('2'));

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:
//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums contains distinct values sorted in ascending order.
//     -104 <= target <= 104

function searchInsertP(nums: number[], target: number) {
  if (nums.length === 0) return 0;

  if (nums.includes(target)) return nums.indexOf(target);

  for (let i = 0; i < nums.length; ++i) {
    const x = nums[i];

    if (x > target) {
      return i;
    }
  }

  return nums.length;
}

// console.log(searchInsertP([1, 3, 5, 6], 5)); // Output: 2
// console.log(searchInsertP([1, 3, 5, 6], 2)); // Output: 1
// console.log(searchInsertP([1, 3, 5, 6], 7)); // Output: 4
// console.log(searchInsertP([1, 3, 5, 6], 0)); // Output: 0

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

//     1 <= nums.length <= 3 * 104
//     -100 <= nums[i] <= 100
//     nums is sorted in non-decreasing order.

function removeDuplicatesP(nums: number[]): number {
  // takes in an array of number.
  // rmeove duplicate values.

  const set = new Set(nums);

  // return length of remaining numbers
  return [...set].length;
}

// console.log(removeDuplicatesP([1, 1, 2])); // Output: 2
// console.log(removeDuplicatesP([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5

// Given a string s, find the length of the longest
// substring
// without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstringP(str: string): number {
  if (str.length < 2) return str.length;

  const subStrings = [];

  let subStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!subStr.includes(char)) {
      subStr += char;
    } else {
      subStrings.push(subStr);
      subStr = char;
    }
  }

  const sorted = subStrings.sort((a, b) => b.length - a.length);

  return sorted[0].length;
}

console.log(lengthOfLongestSubstringP('abcabcbb')); // Output: 3
console.log(lengthOfLongestSubstringP('bbbbb')); // Output: 1
console.log(lengthOfLongestSubstringP('pwwkew')); // Output: 3
console.log(lengthOfLongestSubstringP('')); // Output: 0
console.log(lengthOfLongestSubstringP(' ')); // Output: 1
console.log(lengthOfLongestSubstringP('a')); // Output: 1
