// Problem 1:
// Write a method that prints out every number from 1 to 100. 

// function printNums() {
//   var index = 1;
//   while (index <= 100) {
//     console.log(index);
//   index += 1;
//   }
// }

// printNums();

// Problem 2: 
// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function byTwoNums() {
//   var index = 1
//   while (index <= 100) {
//     console.log(index);
//   index += 2;
//   }
// }

// byTwoNums();

// Problem 3:
// Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.

function arrayFiveFive(array) {
  var count = 0;
  array.forEach(function(array) {
    if (array === 55){
    count.push(array)
  }
  });
  return count.length;
}

console.log(arrayFiveFive([3, 55, 63, 55, 15, 16, 55, 20, 30, 4]));

// Problem 4:
// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].



// Problem 5:
// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}



// Problem 6:
// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}



// Problem 7:
// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.



// Problem 8:
// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// var x = 10;
// if (x ==  "10") {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// 5 == 5    // true 
// 5 == "5"  // true
// 5 === "5" // false
// 5 != "5"  // false
// 5 !== "5" // true

// null, false, 0, (""), undefined, NaN(not a number) // all falsy value in JavaScript.

// var x = 100;

// function addOne(num) {
//   x = 1;
//   return num + 1;
// }

// console.log(x);
// console.log(addOne(5));
// console.log(x);