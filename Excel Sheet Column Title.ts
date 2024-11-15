// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnNumber = 1
// Output: "A"

// Example 2:

// Input: columnNumber = 28
// Output: "AB"

// Example 3:

// Input: columnNumber = 701
// Output: "ZY"

// Constraints:

//     1 <= columnNumber <= 231 - 1

function convertToTitle(columnNumber: number): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (columnNumber > 0) {
    columnNumber--;

    const remainder = columnNumber % 26;
    result = letters.charAt(remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}

console.log(convertToTitle(1));
console.log(convertToTitle(26));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
