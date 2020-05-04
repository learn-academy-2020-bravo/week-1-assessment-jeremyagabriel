// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// Declare a function that takes in a number value, representing temperature, as an argument
const boilingPoint = (num) => {
  // Use if conditional to compare if number is less than boiling point
  if (num < 212) {
    return `${num} is below boiling point.`
    // Use else if conditional if number is greater than boiling point
  } else if (num > 212) {
    return `${num} is above boiling point.`
    // Use else if condiional if number is at boiling point
  } else if (num === 212){
    return `${num} is at boiling point.`
    // Use else as error catch all
  } else {
    return "Please enter a number"
  }
}
// Run variables through function to test
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// Declare a function that takes in an array as an argument
const multFive = (arr) => {
  // Declare local array variable to take in the new array
  let multFiveArray = []
  // Use a for loop to iterate through each index of the array
  for(let i = 0; i < arr.length; i++) {
     // Take value at each index and multiply by 5
     multFiveArray.push(arr[i] * 5)
   }
   // Return new array
   return multFiveArray
}

//Run global array through function to test
console.log(multFive(myNumbers1))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// Declare a function that takes in an array as an argument
const multFiveMap = (arr) => {
  // Return and map through array and multiply each value by 5
  return arr.map(value => value * 5)
}

// Run array through function to test
console.log(multFiveMap(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Declare a function that takes in a string as an argument
const noVowels = (str) => {
  // Declare a local variable array that stores each vowel at a new index
  let vowels = ["a", "e", "i", "o", "u"]
  // Return an array as variable that will split the string's characters into individual indexes
  let strArray = str.split("")
  // Return filtered array through filtering through the above new array
  return filteredArray = strArray.filter(value => {
    // Return only values where an index number exist within the vowels array using .indexOf (i.e. index # less than 0)
    return vowels.indexOf(value) < 0
    // Join back to string through .join
  }).join("")
}

// Run variables through function to test
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

// Declare a function that takes in a string as an argument
const noVowelsError = (str) => {
  // Use if conditional to check if the data type of argument doesn't equal "string", if so return message declaring that
  if (typeof(str) !== "string") {
    return `${str} is not a string`
  }
  // Declare a local variable array that stores each vowel at a new index
  let vowels = ["a", "e", "i", "o", "u"]
  // Return an array as variable that will split the string's characters into individual indexes
  let strArray = str.split("")
  // Return filtered array through filtering through the above new array
  return filteredArray = strArray.filter(value => {
    // Return only values where an index number doesn't exist within the vowels array using .indexOf (i.e. index # less than 0)
    return vowels.indexOf(value) < 0
    // Join back to string through .join
  }).join("")
}

// Run variables through function to test
console.log(noVowelsError(notAString1))
console.log(noVowelsError(notAString2))


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// Declare function that takes in an array as an argument
const catsOnly = (arr) => {
  // Filter through array using value
  return arr.filter(value => {
    // Return only index values where value.animal equals "cat"
    return value.animal === "cat"
  })
}

// Run array through function to test
console.log(catsOnly(toonimals))

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// Declare function that takes in an array as an argument
const nonCatsOnly = (arr) => {
  // Filter through array using value
  return nonCatsArray = arr.filter(value => {
    // Return only index values where value.animal doesn't equal "cat"
    return value.animal !== "cat"
  }).map(value => {
    return value.name
  // Join the object values into single array and place each in new line
  }).join("\n")
}

// Run array through function to test
console.log(nonCatsOnly(toonimals))
