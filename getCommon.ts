const getCommon = function (arr1: number[], arr2: number[]) {
  return arr1.filter((value) => arr2.includes(value))
}

console.log(getCommon([3, 2, 1, 4, 6], [3, 2, 1]))
