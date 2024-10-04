// fn merge
// takes in two integers array (nums1, nums2) sorted in non-descending order, and two integers (m) and (n) which represents the number of elements in nums1 and nums2

const merge = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
}
