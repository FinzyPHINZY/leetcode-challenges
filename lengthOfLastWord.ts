// fn lengthOfLastWord
// takes in a string of words. empty or invalid characters? only takes in strings and spaces
// returns the length of the last word

function lengthOfLastWord(s: string): number {
  let newStr = s.trim().split(' ')

  return newStr[newStr.length - 1].length
}

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))
