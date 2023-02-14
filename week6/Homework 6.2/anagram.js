// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function validAnagram(str1, str2){
if(str1.length  !== str2.length){
    return false
}
const counter1 = {};
const counter2 = {};
for(let char of str1){
    counter1[char] = counter1[char]+1 || 1
}
for(let char of str2){
    counter2[char] = counter2[char]+1 || 1
}
for(let key in counter1){
    if(!(key in counter2)
    || counter2[key] !== counter1 [key]){
        return false;
    }

}
return true;
}
console.log (validAnagram('rail safety', 'fairy tales'))