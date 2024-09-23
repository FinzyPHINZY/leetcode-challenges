// fn letterCombinations
// takes in a string of integers i.e: '23'
// returns all the possible letter combinations that the numbers could represent
// letterCombinations('23') returns ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// letterCombinations('') returns []
// letterCombinations('2') returns ["a","b","c"]

const letterCombinations = function (str: string): string[] {
  if (str.length === 0) return []

  const map: { [key: string]: string[] } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  let result: string[] = []

  const backtrack = (combination: string, nextDigits: string) => {
    if (nextDigits.length === 0) {
      result.push(combination)
    } else {
      let digit = nextDigits[0]
      const letters = map[digit]

      if (letters) {
        for (const letter of letters) {
          backtrack(combination + letter, nextDigits.slice(1))
        }
      }
    }
  }

  backtrack('', str)

  return result
}

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
