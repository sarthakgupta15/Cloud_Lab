// Write a JavaScript function that reads a text file and logs its content to the
// console using the fs module in Node.js.

const fs = require('fs');

function readAndLogTextFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        console.error("Error reading the file:", error.message);
    }
}

// Example usage:
readAndLogTextFile('/Users/sarthak/Desktop/CBES/JS&JSON/q3.txt');
