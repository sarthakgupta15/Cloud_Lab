//Write a JavaScript function that takes an array of integers as input and returns a
//new array with each element multiplied by 2.

function multiplyByTwo(inputArray) {
    return inputArray.map(element => element * 2);
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let newArray = multiplyByTwo(originalArray);
console.log(newArray);
