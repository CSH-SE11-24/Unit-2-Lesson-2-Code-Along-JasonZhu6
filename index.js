// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let dayOfWeek = prompt("Enter a day of the week (For example, Monday): ").toLowerCase()

if (dayOfWeek == "monday" || dayOfWeek == "tuesday" || dayOfWeek == "wednesday" || dayOfWeek == "thursday" || dayOfWeek == "friday") {
  console.log("It is a weekday")
} else if (dayOfWeek == "saturday " || dayOfWeek == "sunday") {
  console.log("It is a weekend")
}

// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = parseInt(prompt("Enter your age: "))

if (0 <= age <= 12) {
  console.log("You are a child. ")
} else if (13 <= age <= 19) {
  console.log("You are a teenager. ")
} else if (20 <= age <= 64) {
  console.log("You are an adult. ")
} else if (age >= 65) {
  console.log("You are a senior citizen. ")
}

// WHILE LOOPS
// Print 1 to 5
let num = 1

while (num <= 5) {
  console.log(num)
  num++
}

// Print from a certain number to 1
let num2 = parseInt(prompt("Enter a number: "))

while (num2 >= 1) {
  console.log(num2)
  num--
}

// Summing up to 5
let sum = 0

let counter = 1

while (counter <= 5) {
  sum = sum + counter
  counter++
}

console.log(`Sum of 1 - ${counter} is ${sum}`)

// Using prompt
let student = "Whoever"

let guessStudent = prompt("Guess a student in this class: ")

while (student != guessStudent) {
  guessStudent = prompt("Try again, guess a different student. ")
}
console.log("You got it!")