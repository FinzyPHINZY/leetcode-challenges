// fn isValid
// takes in a string of characters
// returns a boolean depending on where each opening brackets include its corresponding closing bracket

function isValid(s: string): boolean {
  const stack: string[] = []
  const map: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(' || char === '{' || char === '[') {
      // Push open brackets onto the stack
      stack.push(char)
    } else if (char === ')' || char === '}' || char === ']') {
      // Check if the closing bracket matches the top of the stack
      const top = stack.pop()
      if (top !== map[char]) {
        return false // Mismatch found
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0
}

console.log(isValid('()'), true)
console.log(isValid('()[]{}'), true)
console.log(isValid('(]'), false)
console.log(isValid('([])'), true)
console.log(isValid('([)]'), false)
console.log(isValid('()'), true)
