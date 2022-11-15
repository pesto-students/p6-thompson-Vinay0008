const hasDuplicate = (array) => {
  const arraySet = new Set(array);
  if (arraySet.size === array.length) return false;
  return true
}

console.log(hasDuplicate([1, 2, 3, 4]));
console.log(hasDuplicate([1, 2, 3, 4, 1]));