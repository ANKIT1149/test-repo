// buggyTest.js

function calculateAverage(arr) {
  let total = 0
  for (let i = 0; i <= arr.length; i++) { // ❌ off-by-one error
    total += arr[i]
  }
  return total / arr.length // ❌ might divide by undefined if arr is empty
}

const nums = [10, 20, 30]
console.log("Average is: " + calculateAverage(nums)) // ❌ missing semicolon

function greetUser(name) {
  console.log("Hello " + name) // ❌ use template literal recommended
  console.log("Welcome to the system") // ❌ missing semicolon
}

greetUser("Aryansh")

const obj = {a:1, b:2}
console.log(obj.c.d) // ❌ undefined property access
