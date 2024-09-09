// findMedianSortedArrays()
// a two sorted number arrays. an empty array?n
// return the median of the array

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b)
  const length = arr.length

  if (length % 2 !== 0) {
    const index = Math.floor(length / 2)
    return arr[index]
  } else {
    const index1 = length / 2 - 1
    const index2 = length / 2
    return (arr[index1] + arr[index2]) / 2
  }
}

console.log(findMedianSortedArrays([1, 3], [2]), 2)
console.log(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7]), 4)
console.log(findMedianSortedArrays([1, 2], [3, 4]), 2)
