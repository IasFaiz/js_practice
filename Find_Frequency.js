// The Below code is not valid as you cant use . notation to access dynamic properties
//Optional chaining will not help as well

// const arr = [1, 2, 4, 5, 3, 7, 2, 6, 4, 8, 9, 2];
// let freq = {};
// for (let i = 0; i < arr.length; i++) {
//   if (freq.arr[i]) {
//     freq.arr[i]++;
//   } else {
//     freq.arr[i] = 1;
//   }
// }
// console.log(freq);

//  **********************************************************************************************

// This is best way of doing this using bracket notation, means dynamic access to a property.

// const arr = [1, 2, 4, 5, 3, 7, 2, 6, 4, 8, 9, 2];
// let freq = {};
// for (let i = 0; i < arr.length; i++) {
//   if (freq[arr[i]]) {
//     freq[arr[i]]++;
//   } else {
//     freq[arr[i]] = 1;
//   }
// }
// console.log("Using For Loop: ", freq);

//  **********************************************************************************************

// Another way of doing is to use reduce function.
// This is a bad way of using reduce function and it works as resp and freq will both get value
// and we are using unnecessary memory in freq variable.

// const arr = [1, 2, 4, 5, 3, 7, 2, 6, 4, 8, 9, 2];
// let freq = {};
// let resp = arr.reduce((obj, item) => {
//   if (obj[item]) {
//     obj[item]++;
//   } else {
//     obj[item] = 1;
//   }
//   return obj;
// }, freq);

// console.log("Reduce Frequency: ", freq, resp);

//  **********************************************************************************************
// Best and optimised way of using reduce here is

// const arr = [1, 2, 4, 5, 3, 7, 2, 6, 4, 8, 9, 2];
// let freq = arr.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log("Optimised Reduce Frequency: ", freq);
