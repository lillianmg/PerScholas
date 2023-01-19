
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
//const nums = [2,5,3,4,7,9,8,10,1,0,6]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.


// Every
// Determine if every number is greater than or equal to 0
function isGreater(arr){
    return arr >= 0;   
}
let result = nums.every(isGreater);
console.log(result);

// determine if every word shorter than 8 characters
function isShorter(arr){
    return arr.length < 8;
}
let results = panagram.every(isShorter)
console.log(results)


// Filter
// filter the array for numbers less than 4
const numResult = nums.filter(nums =>nums < 4);
console.log(numResult)

// filter words that have an even length
function getEvenWords(pan) {
    return pan.length % 2 ===0
}
let item = panagram.filter(getEvenWords)
console.log(item);


// Find
// Find the first value divisible by 5
const num1 = nums.find(nums =>nums % 5 === 0);
console.log(num1)

// find the first word that is longer than 5 characters
const found = panagram.find((word) => word.length >5);
console.log(found)


// Find Index
// find the index of the first number that is divisible by 3
const num2 = nums.indexOf(nums =>nums % 3 === 0);
console.log(num2)


// find the index of the first word that is less than 2 characters long


// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach((arr) =>{
    console.log(arr * 3);
})
// console.log each word with an exclamation point at the end of it
panagram.forEach(([]) =>{
    console.log([] == "!");
})


// Thought Questions 

// What happened to the original array?
// The numbers in the array multiplied by 3
// Can you store the values from a forEachmethod in a new array?
// Yes 


// Map
// make a new array of each number multiplied by 100
let newNums = nums.map((nums) => {
    return nums * 100  
 })
 console.log(newNums);
// make a new array of all the words in all uppercase
let upper= panagram.map(x => x.toUpperCase()) 
    console.log( upper); 
 
// Thought Questions

// What happened to the original array? 
// The the values were changed to all uppercase letters in the array
// Can you store the values from a mapmethod in a new array?
// Yes


// Some
// Find out if some numbers are divisible by 7
let divisibleBy = nums.some((item) => {
 console.log(item % 7)
})
// Find out if some words have the letter ain them
let panagram1 = panagram.some((item) => {
    console.log(item === "ain")
   })