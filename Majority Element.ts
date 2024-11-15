// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

function majorityElement(nums: number[]): number {
  const map: Record<number, number> = {};

  nums.forEach((num) => {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  });

  for (const key in map) {
    const x = nums.length / 2;
    if (map[key] > x) {
      return Number(key);
    }
  }

  return 0;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// takes in an array of number
// returns majority item - the item that appears more than half the length of the array
// example: majorityElement([3,2,3]) => 3 because 3 appears twice which is the more than half the length of the array. 2 > 3/2
// find the item that appears the most
