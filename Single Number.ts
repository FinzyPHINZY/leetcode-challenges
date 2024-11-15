// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

//     1 <= nums.length <= 3 * 104
//     -3 * 104 <= nums[i] <= 3 * 104
//     Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums: number[]): number {
  const map: Record<number, number> = {};

  nums.forEach((num) => {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  });

  for (const key in map) {
    if (map[key] < 2) {
      return Number(key);
    }
  }
  return 0;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

// optimized implementation
function singleNumberr(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num; // XOR operation
  }
  return result;
}
