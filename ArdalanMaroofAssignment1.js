// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO


//Create a function and take a string as a parameter
function checkForYInString(str) {
    //create a variable and change the string to lowercase, 
    // if the string contains lowercase "y" or uppercase "Y" does not make problems. use includes method to check for "y"
    const strContainsY = str.toLowerCase().includes("y");
    
    //use conditional turnery operator and console "YES" or "No" accordingly
    console.log(strContainsY? "YES": "NO");
    
}

//call the function
checkForYInString("Crazy");

checkForYInString("Hello");


// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach

// function getFactorial(num) {
// logic
// return the value;
// }

 //Create a function and take a parameter which is a number to find its factorial.
function factorialOfNumber(factorialNum) {
    
    //In case our number was small than zero return bellow: Use if...conditional
    //factorial is not defined for negative numbers, so return bellow
    if (factorialNum < 0) return "Factorial is not defined for negative numbers";
    
    ////create a variabla and assign it to 1. factorials do not go below 1.
    let result = 1;
    
    // Create an array from 1 to factorialNum
    // Use forEach to multiply each number to result
    const numbers= Array.from({ length: factorialNum }, (_, i) => i + 1).forEach(num => result *= num);
    return result;
}

// Examples:console and call the function, give parameters (numbers)
console.log(factorialOfNumber(5)); // resutl to be 120
console.log(factorialOfNumber(0)); // result to be 1
console.log(factorialOfNumber(-1)); // result to be Factorial is not defined for negative numbers




//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];

// function getHighestAverageStudent() { // return string
    // returns the student name with highest average marks
// }


//Array called studentlList
let studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 80, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] },
  ];
  
  //Create a function called getHighestAverageStudent
  function getHighestAverageStudent() {

    //Use reduce, map and sort methods to go through each object in the array. A new array created that has name and average to transform each student to it.
    return studentList.map(student => ({ name: student.name, average: student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length})).sort((a, b) => b.average - a.average)[0].name;
  }
  // Example: call the function and print the name that has 
  console.log(getHighestAverageStudent()); // Daniel

  


//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


const arr = [20, 4, -10, 4, 11, 20, 4, 2];
//Create a function and takes an array as input.

const highestOccurrence = (arr) =>
    //use Reduce method to accumulate the keys and number od their accurences and into an object. Then the second reduce method to go through the object to find the highest occurence of any number.
    Object.entries(
      arr.reduce((accumilator, num) => ((accumilator[num] = (accumilator[num] || 0) + 1), accumilator), {})
    ).reduce((accumilator, [key, value]) => (value > accumilator[1] ? [Number(key), value] : accumilator), [null, 0])[0];
  
  // call the function and print the result 
  console.log(highestOccurrence(arr)); // Output: 4
  


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

//An array of numbers
const numbers = [20, 20, 11, 4, 11, 20, 2, 4];

//Create a function and take an array as a parameter
function findUniqueNumber(arr) {
    //Use filter method to iterate over the array of numbers and to check based on the condition inside the array and returns it. Then it goes through the filtered array of the unique numbers
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))[0];
}

//create and array and call the function to take array of numbers as a parameter
const uniqueNumber = findUniqueNumber(numbers);
//print it and the output will be 2
console.log("The unique number is:", uniqueNumber); // Output: 2



// aba abba  abca  acca a 
//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']
// ['aba', 'ccc', 'a']

//Array of palindroms and not palindroms
const palNotPalString = ['abc', 'aba', 'ccc', 'dca', 'a'];

//Create const variable (isPalindrome) and arrow function and takes a string as a parameter. It returns true if the string is palindrome or false if it is not palindtrome
const isPalindrome = (str) => {
    
    //methods of split, reverse, join are used to split the string and then reverse it and join them again, and comapare with the original atring, if they are the same it is planidrome or otherwise.
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

//create a const variable, call the function and filter the strings to create palindrome strings array.
const palindromes = palNotPalString.filter(isPalindrome);

//print the array of palindromes
console.log(palindromes); // Output: ['aba', 'ccc', 'a']
