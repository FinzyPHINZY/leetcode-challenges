export default function bubble_sort(arr: number[]) {
  let sorted = false
  let n = arr.length - 1

  while (!sorted) {
    sorted = true
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        sorted = true
      }
    }
    n--
  }
  return arr
}

console.log(bubble_sort([1, 3, 2, 7, 4]))
