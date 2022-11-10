"use strict"

// Question 1
function max(x , y){
    if(x > y) return x;
    else return y;
}
//Question 2
function maxOfThree(x, y, z){
    if(x > y) return (x > z) ? x : z;
    return (y > z) ? y : z;
}
//Question 3
function isVowel(str){
    if(typeof(str) == 'number' || String(str).length !== 1) return false;
    return ['a', 'e', 'i', 'o', 'u'].indexOf(String(str).charAt(0).toLowerCase()) !== -1;
}
//Question 4a
function sum(arr){
    if(!Array.isArray(arr) || arr.length == 0) return false;
    let res = 0;
    for(var i = 0; i < arr.length; i++) res += arr[i];
    return res;
}
//Question 4b
function multiply(arr){
    if(!Array.isArray(arr) || arr.length == 0) return false;
    let res = 1;
    for(var i = 0; i < arr.length; i++) res *= arr[i];
    return res;
}
//Question 5
function reverse(str){
    if(typeof(str) !== 'string') return false;
    let result = '';
    for(let i = 0; i < str.length; i++) result = String(str).charAt(i) + result;
    return result;
}
//Question 6
function findLongestWord(arr){
    if(!Array.isArray(arr) || arr.length == 0) return false;
    let longest = String(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(longest.length < String(arr[i]).length) longest = String(arr[i]);
    }
    return longest;
}
//Question 7
function filterLongWords(arr, arrSize){
    if(!Array.isArray(arr) || arr.length == 0) return false;
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(String(arr[i]).length > arrSize) res.push(arr[i]);
    }
    return res.toString();
}
//Question 8
const computeSumOfSquares = arr => arr
    .map(x => x * x)
    .reduce((a, b) => a + b, 0);

//Question 9
function printOddNumbersOnly(arr){
    if(!Array.isArray(arr) || arr.length == 0) return false;
    let res = "";
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i]) && arr[i] % 2 !== 0) res += Number(arr[i]) + " ";
    }
    console.log('9. ' + res);
}
//Question 10
const computeSumOfSquaresOfEvensOnly = arr => arr
    .filter(x => x % 2 == 0)
    .map(x => x * x)
    .reduce((a, b) => a + b, 0);

//Question 11a
const sumFunc = arr => arr
    .reduce((a, b) => a + b, 0);
//Question 11b
const multFunc = arr => arr
    .reduce((a, b) => a * b, 1);

//Question 12
function findSecondBiggest(arr){
    if(!Array.isArray(arr) || arr.length < 2) return false;
    if(arr.length == 2) return (Math.max(arr[0], arr[1]));
    let biggest = -Infinity;
    let secondBig = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > biggest) biggest = arr[i];
        if(biggest < secondBig){// swap
            let temp = biggest;
            biggest = secondBig;
            secondBig =temp;
        }
    }
    return secondBig;
}
// Question 13
function printFibo(n, a, b){
    let res = a + ", " + b;
    let curr = a + b;
    if(n <= 2) console.log("13. " + res);
    for(let i = 2; i <= n; i++){
        curr = a + b;
        res += ", " + curr;
        a = b;
        b = curr;
    }
    console.log("13. " + res);
}



console.log("1. " + max(10, 20));
console.log("2. " + maxOfThree(40, 50, 60));
console.log("3. " + isVowel('uoiea'));
console.log("4a. " + sum([10, 20, 30]));
console.log("4b. " + multiply([10, 20, 30]));
console.log("5. " + reverse("jag testar"));
console.log("6. " + findLongestWord(["Rwanda", "Nigeria"]));
console.log("7. " + filterLongWords(['aaa', 'aa', 'aaaa'], 2));
console.log("8. " + computeSumOfSquares([1, 2, 3, 4]));
printOddNumbersOnly([1, 2, 3, 4]); //9.
console.log("10. " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));
console.log("11a. " + sumFunc([1, 3, 5]));
console.log("11b. " + multFunc([1, 3, 5]));
console.log("12. " + findSecondBiggest([4.4,30.32,3,4]));
printFibo(10, 0, 1); //13