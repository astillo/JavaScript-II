// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const firstItem = (firstItem) => { console.log(firstItem) }
function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, (firstItem) => {
  console.log(firstItem);
});
function last(arr, cb) {
  cb(arr.slice(-1)[0])
}
last(items, firstItem)

function sumNums(x, y, cb) {
  cb(x + y)
}
sumNums(4, 67, (result) => {
  console.log("Added anwser: ", result)
})
function multiplyNums(x, y, cb) {
  cb(x * y)
}
multiplyNums(66, 3, (result) => {
  console.log("Multiplied anwser = ", result)
})
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
}
contains("Gum", items, (trueF) => {
  console.log(trueF)
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
