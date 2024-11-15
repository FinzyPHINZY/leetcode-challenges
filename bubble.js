"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubble_sort(arr) {
    var sorted = false;
    var n = arr.length - 1;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = true;
            }
        }
        n--;
    }
    return arr;
}
exports.default = bubble_sort;
console.log(bubble_sort([1, 3, 2, 7, 4]));
