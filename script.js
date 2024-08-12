// TASK 1 ||||||||||||||||||||||||||||||||||||

// let str = 'Candy';

// const pickTheMiddleThree = (str) => {
//     newStr = '';
//     let startIndex = Math.floor((str.length - 3) / 2); 
//     for (let i = startIndex; i < startIndex + 3; i++) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// console.log(pickTheMiddleThree(str));

// The Formula: to get the specified number of MIDDLE letters from the string, 
// you have to subtract that specified number and divide by 2, and then you get the middle part of the string;

// If the string's length is odd number, Math.floor will get the first letter: (Candy == and) (Candy+y == and)-> still, "and";
// If we don't use Math.floor at all, we get undefined as the middle number index will be decimal (1.5, 1.6, 3.5);









// TASK 2 ||||||||||||||||||||||||||||||||||||

// let a = 'yo';
// let b = 'java';

// const pickTheFirstLastChars = (a, b) => {
//     let firstChar = a[0];
//     let lastChar = b[b.length - 1];

//     if (a === '') {
//         firstChar = '@';
//     }

//     if (b === '') {
//         lastChar = '@';
//     }
//     return firstChar + lastChar;
// }
// console.log(pickTheFirstLastChars(a, b));


// TASK 2 using length inside the condition

// let a = 'yo';
// let b = 'java';

// const pickTheFirstLastChars = (a, b) => {
//     let firstChar = a[0];
//     let lastChar = b[b.length - 1];

//     if (a.length == 0) {
//         firstChar = '@';
//     }

//     if (b.length == 0) {
//         lastChar = '@';
//     }
//     return firstChar + lastChar;
// }
// console.log(pickTheFirstLastChars(a, b));




// TASK 2 using length inside the condition but with ChatGPT - the ultimate version

// let a = 'yo';
// let b = 'java';

// const pickTheFirstLastChars = (a, b) => {
//     let firstChar;
//     let lastChar;

//     if (a.length == 0) { // a === '';
//         firstChar = '@';
//     } else {
//         firstChar = a[0];
//     }

//     if (b.length == 0) { // b === '';
//         lastChar = '@';
//     } else {
//         lastChar = b[b.length - 1];
//     }

//     return firstChar + lastChar;
// }

// console.log(pickTheFirstLastChars(a, b));









// TASK 3 ||||||||||||||||||||||||||||||||||||

// let a = 'blueTimes';

// const findTheColor = (a) => {
//     let result = 'Empty String';
//     let redColor = '';
//     let blueColor = '';

//     for (let i = 0; i < 3; i++){
//         redColor += a[i]; 
//     }
//     for (let i = 0; i < 4; i++){
//         blueColor += a[i];
//     }

//     if (redColor == 'red'){
//         result = 'red';
//     } else if (blueColor == 'blue'){
//         result = 'blue';
//     } 
//     return result;
// }

// console.log(findTheColor(a));









// TASK 4 ||||||||||||||||||||||||||||||||||||

// let a = 'Hello';

// const logTheLettersThreeTimes = (a) => {
//     let result = '';
//     if (a.length > 1) {
//         for (let i = 0; i < 3; i++) {
//             result += a[0] + a[1];
//         }
//     } else {
//         for (let i = 0; i < 3; i++) {
//             result += a[0];
//         }
//     }
//     return result;
// }

// console.log(logTheLettersThreeTimes(a));
