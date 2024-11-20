// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

//     1 <= nums.length <= 104
//     -231 <= nums[i] <= 231 - 1

//  Follow up: Could you minimize the total number of operations done?

/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {

const moveZeroes = (nums: number[]) => {
  let n = nums.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < n; i++) {
      if (nums[i] === 0) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;

        sorted = false;
      }
    }

    n--;
  }
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

// takes in an array of numbers
// move every zero to the end of the array
// iterate though the array. find 0, if o, move to the end of the array. .
