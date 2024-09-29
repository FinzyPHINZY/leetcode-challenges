function removeElement(nums: number[], val: number): number {
  let k = 0

  for (let i = 0; i < nums.length; ++i) {
    const char = nums[i]

    if (char !== val) {
      nums[k] = char
      k++
    }
  }

  return k
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))