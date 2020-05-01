// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

// Describe a function called addThemUp
describe("addThemUp", () => {
  // Testing that the function returns the sum of the two numbered arguments
  test("Returns sum of the two numbered arguments", () => {
    // Expect that addThemUp(2,2) equals 4 or addThemUp(-4,3) equals -1
    expect(addThemUp(2, 2)).toEqual(4)
    expect(addThemUp(-4, 3)).toEqual(-1)
  })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.

// Declare function that takes in two numbers as arguments
const addThemUp = (num1, num2) => {
  // Return the sum of the first argument with the second argument
  return num1 + num2
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

// Describe a function called triangleArea that takes in two numbers as arguments
describe("triangleArea", () => {
  // Testing that the function returns area of arg1 multiplied by arg2 divided by two to equal area of triangle
  test("Returns the value of the first number multiplied by the second, divided by two for triangle area", () => {
    // Expect that triangleArea(20, 10) equals 100 or that triangleArea(45.5, 23.4) equals 532.35
    expect(triangleArea(20,10)).toEqual(100)
    expect(triangleArea(45.5,23.4)).toEqual(532.35)
  })
})


// --------------------2b) See the test fail. THEN write the code to make the test pass.

// Declare a function that takes in two numbers are arguments
const triangleArea = (base, height) => {
  // Return the value of first num multiplied by the second num, dividied by two
  return base * height / 2
}
