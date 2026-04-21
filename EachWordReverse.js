function reverseEachWord(str) {
    return str
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

console.log(reverseEachWord("hello world")); // olleh dlrow

//palindrome
let str = "madam";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

//Largest Number in Array

let arr = [10, 5, 20, 8];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max); // 20