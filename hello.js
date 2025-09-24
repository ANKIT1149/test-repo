function calculateSum(arr) {
  let sum = 0
  for (let i = 0; i <= arr.length; i++) { // ❌ off-by-one error
    sum += arr[i]
  }
  return sum
}

const numbers = [10, 20, 30]
console.log("Total sum is: " + calculateSum(numbers)) // ❌ missing semicolon
