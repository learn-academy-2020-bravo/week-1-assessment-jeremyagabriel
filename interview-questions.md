# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: A piece of code, when invoked, will perform a desired function. The function can take in arguments so that it may be reused, for example a function can be written in which it takes two numbers and returns the sum. A function can also be more complex as a higher order function in which another function could be nested within the code block or that the function itself returns another function.

  Researched answer: Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it. It consists of:

  - The name of the function.
  - A list of parameters to the function, enclosed in parentheses and separated by commas.
  - The JavaScript statements that define the function, enclosed in curly brackets, {...}.


2. What is the difference between map and filter?

  Your answer: Mapping through an array allows the function to loop through each index and utilize the respective value and/or index and return a new value. Filtering moves through the array as well, but only utilizes values that meet the set parameters.

  Researched answer: . filter() returns a subset of the elements from the original array, while . map() produces an array with new, different entries based on the elements in the original array.



3. What is the difference between console.log() and return?

  Your answer: Console.log is a built in method only used and seen by the developer in order to see what is printed in the console. Utilizing this while coding helps the developer check different lines of code to see if the expected value is printed or if an console error may be occurring. Returning is printing a specific value that the the front end of a site utilizes. A value that is returned is only logged when that function is invoked.

  Researched answer: console.log will display the parameter passed to the log method in the console window. Use this method to display a string or variable in the console window. You can use the console class in your code as well, much like we can use JavaScript alerts. When using the return statement, the function will stop executing, and return the specified value.



4. In regards to functions, what is an argument?

  Your answer: An argument in a function that has not been invoked is essentially a placeholder data type that will need to be ran through the function to return the expected result. When invoked, the function uses the input values where the placeholder has been coded within the code block.

  Researched answer: Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming should always designate one developer as the "driver" and the other as "navigator" at any given time. The driver's focus is on the code at hand being written immediately into the editor, utilizing their knowledge of the correct syntax and naming to accomplish the necessary function or code. The navigator, while watching the code, is thinking the bigger picture and reminding the driver why the code is being written, as well as overseeing any major (or minor) missteps the driver may have written. The pair should switch rolls around every hour.

  Researched answer: Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.



6. What is TDD? Describe the work flow associated with TDD.

  Your answer: Something driven development? And it deals with pseudocoding your thought process first? My mind can't remember on the spot :'(

  Researched answer: Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the code is improved so that the tests pass. This is opposed to software development that allows code to be added that is not proven to meet requirements.

  1. Add a test
  2. Run all the tests and see if the new test fails
  3. Write the code
  4. Run test
  5. Refactor code
  6. Repeat

  (DUH)

7. What is something we did in class this week you found helpful?  

  Your answer: In general, the introduction to pair programming. It being both a joy and challenge to yourself to work immediately with someone to solve a problem.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React - React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
- Yarn - Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world.
- React State - React components has a built-in state object. The state object is where you store property values that belongs to the component. hen the state object changes, the component re-renders.
- CRUD - Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.
- this - this keyword refers to an object, that object which is executing the current bit of javascript code.
