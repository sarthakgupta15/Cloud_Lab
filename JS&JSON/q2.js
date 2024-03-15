// Write a JavaScript program that takes a string input from the user and checks if
// it is a palindrome or not.

let s= "sarthakahtras";
 
function check(s){ 
    let n=s.length
    for(var i=0;i<n/2;i++){ 
        if(s[i]!=s[n-i-1]) return false;
    }
    return true;
}

let ans = check(s); 
if(ans==true){
    console.log("Given string is palindrome.")
}else{
    console.log("Given string is not a palindrome.")
}








// const readline = require('readline');

// function isPalindrome(inputString) {
//     let cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let reversedString = cleanedString.split('').reverse().join('');
//     return cleanedString === reversedString;
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a string: ", function(userInput) {
//     if (isPalindrome(userInput)) {
//         console.log("It is a palindrome.");
//     } else {
//         console.log("It is not a palindrome.");
//     }
//     rl.close();
// });
