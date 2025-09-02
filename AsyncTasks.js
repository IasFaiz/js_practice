// what will be loged on console
console.log("1");
console.log("2");
Promise.resolve(console.log("3"));
setTimeout(() => console.log("4"), 10000);
console.log("5");
setTimeout(() => console.log("6"), 10);
Promise.resolve().then(() => console.log("7"));
setTimeout(() => console.log("8"), 0);
Promise.resolve(console.log("9"));
console.log("10");
