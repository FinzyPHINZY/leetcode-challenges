// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

//     n == nums.length
//     1 <= n <= 105
//     1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

function findDisappearedNumbers(nums: number[]): number[] {
  const array = Array.from({ length: nums.length }, (_, i) => i + 1);

  return array.filter((num) => !nums.includes(num));
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));

// fn findDisappearedNumbers()
// takes in an array of numbers (nums)
// n = nums.length
// get an array of numbers of 1 to n = nNums:
// iterate through nums.
// return an array of the numbers in nNums that aren't found in nums
