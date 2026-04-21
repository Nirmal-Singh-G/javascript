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