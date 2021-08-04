/*
Print odd numbers in an array [anonymous fn]
*/

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var oddNumber = function (arr){
// for(i=0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         // console.log("even")
//     }else {
//         console.log("odd" + " " + arr[i])
//     }

// }
// }
// oddNumber(arr)

/*
 -------------------------------------------------
*/

/*
 Print odd numbers in an array [IIFE]
*/

//  (function () {
//     var arr = [1,2,3,4,5]
//     for(i in arr){
//         if(arr[i] % 2 == 0){

//         }else {
//             console.log("odd"+ " "+ arr[i])
//         }
//     }

// })()

/*
 -------------------------------------------------
*/

/*
 Sum of all numbers in an array
*/

// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var add = 0
// for(i in numbers){
//     add += numbers[i];
// }
// console.log(add)

/*
 -------------------------------------------------
*/

/* Convert all the strings to title caps in a string array
 */

// var sentence = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy" ,"dog" ]
// sentence = sentence.map(function (a) { return a.toUpperCase();

// })
// console.log(sentence)

/*
 -------------------------------------------------
*/

/**
 *  Return all the prime numbers in an array
 */

//   var primes = [];
//   for (var i = 0; i <= 50; i++) {
//       var notaprime= false;
//       for (var j = 2; j <= i; j++) {
//           if (i%j==0 && j!=i) {
//               notaprime = true;
//           }
//       }
//       if (notaprime === false) {
//           primes.push(i);
//       }
//   }
//   primes = primes.reverse();
//   for(i = primes.length; i > 0; i--) {
//       console.log(primes[i]);
//   }

/*
 -------------------------------------------------
*/

/**
 *Return all the palindromes in an array
 */

// var palindromes = ["raCeCaR"];
// var n = palindromes[0].split("");
// var a = "";
// for (var i = n.length - 1; i >= 0; i--) {
//   a += n[i];
// }
// console.log(a);

/*
 -------------------------------------------------
*/

/**
 * Rotate an array by k times
 */
// var nums = [1, 2, 3, 4, 5, 6, 7];
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };
// console.log(rotate(nums));
