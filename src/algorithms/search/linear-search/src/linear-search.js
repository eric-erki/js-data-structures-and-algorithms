// Linear Search
// Starts at the beginning and iterates through the whole array
// Best case: 0(1) (the element you're looking for is the first in the array)
// Worst case: 0(n) (the element you're looking for is the last in the array or not in the array at all)

export const linearSearch = (haystack, needle, showLogs) => {
  for (let i = 0; i < haystack.length; i++) {
    /* istanbul ignore next */
    showLogs &&
      console.log(
        `iteration ${i + 1}: ${needle} === ${haystack[i]} ? ... ${needle ===
          haystack[i]}!`
      )
    if (needle === haystack[i]) {
      return i
    }
  }
  return -1
}