// Given an integer array nums of unique elements, return all possible
// subsets
// (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

//     1 <= nums.length <= 10
//     -10 <= nums[i] <= 10
//     All the numbers of nums are unique.

function subsets(nums: number[]): number[][] {
  const result = [[]];

  function dfs(i: number, cur: any) {
    if (i === nums.length) {
      result.push(cur);
      return;
    }

    dfs(i + 1, cur);
    dfs(i + 1, cur.concat(nums[i]));
  }

  dfs(0, []);

  return result;
}

console.log(subsets([1, 2, 3]));
