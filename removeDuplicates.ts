// fn removeuplicates
// takes in an integer array. would the elements in the array always be integers?
// returns the length of the unique elements in an array.

// They don't really want you to remove the duplicates. They want you to sort the uniques at the front, then return the length of the sorted part. Then, behind the scenes, they slice the array at the length you give them and the result of that is what they check.

function removeDuplicates(nums: number[]) {
  if (nums.length === 0) return 0

  let k = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
