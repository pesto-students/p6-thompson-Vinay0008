const vowelCountFn = (str) => {
  const vowelString = 'aeiou'
  const vowelCount = new Map()
  for (let char of str.toLowerCase()) {
    if (vowelString.includes(char)) {
      if(vowelCount.has(char)) {
        vowelCount.set(char, vowelCount.get(char) + 1)
      } else {
        vowelCount.set(char, 1)
      }
    }
  }
  return vowelCount
}

console.log(vowelCountFn('Hello This is Vinay'))