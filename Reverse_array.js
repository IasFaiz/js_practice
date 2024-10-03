// let arr = [
//   { id: 1, name: "A name" },
//   { id: 1, name: "B name" },
//   { id: 1, name: "C name" },
// ];
let arr = [1, 2, 3, 4, 5, 7, 6];
console.log("Initial: ", arr);
let count = 0;
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let swap = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = swap;
}
console.log("Final: ", arr);
// let a = [1, 1, 1, 1, 5, 6, 7, 8, 8, 8, 9];
// let test = 5 * 26 ** 9 * 9;
// let b = a.reduce((acc, curr) => {
//   if (acc[curr]) {
//     acc[curr] = ++acc[curr];
//   } else {
//     acc[curr] = 1;
//   }
//   return acc;
// }, {});
// function a() {
//   let b = new Promise((res) => {
//     setTimeout(() => {
//       console.log("Processed");
//       res("Done!");
//     }, 1000);
//   });
//   b.then((data) => console.log(data));
// }
// // a();

// let bb = setTimeout(() => {
//   console.log("Processed");
//   // console.log("Its Here", bb);
// }, 1000);

// if (bb) {
//   clearTimeout(bb);
//   console.log("cancelled");
// }

// debounce throtling
// settimeout Qs
// json placeholder APi call etc App making + pagination
// Aray revers 2nd, largest
// puzzel: 16 or 8 balls with same weight and color except weight of one.you have to weigh and find that one.
// JS and React
// Strict mode m 2 bar ku run hota hai useEffect, ar isko hata skte hain ya nahi.
// component life cycle
