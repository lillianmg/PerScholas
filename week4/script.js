/*
A. Q + A
1. How do we assign a value to a variable? 
With the assignment operator. For example, let x = 10

2. How do we change the value of a variable?
JavaScript has a variety of operators that allow you to modify a value on assignment. This operator allows you to increase the left-side operand by adding the right-side operand.
In this example, we will start by declaring a variable with the name “x“, and assign it the value of 10.
We then use JavaScript’s addition assignment operator (+=) to increase the value of our “x” variable by 11.

let x = 10;
x += 11;
console.log(x);

3. How do we assign an existing variable to a new variable?
let x = 10;
let y = x;

4. Remind me, what are declare, assign, and define?
We declare JavaScript variables with var , let , or const.
Assign means simply setting a value for a variable.
A variable is defined when it has been declared in the current scope using a declaration statement.

5. What is pseudocoding and why should you do it?
It is used for creating an outline or a rough draft of a program. Pseudocode summarizes a program's flow, but excludes underlying details.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
90% thinking about solving it and 10% actually typing the solution


B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariable in a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable? 3
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean


let firstVariable;
firstVariable = "Hello World";

// console.log(firstVariable)

firstVariable = 3;
// console.log(firstVariable)

let secondVariable = firstVariable;
// console.log(secondVariable)

secondVariable = "Hello World";
// console.log(secondVariable)

let yourName = "Lillian";
let myIntro = "My name is " + yourName;
console.log(myIntro)

C. Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e  === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

*/
