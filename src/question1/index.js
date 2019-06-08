import { store, load } from "./lib";

let arr = [];
for (let i = 0; i <= 1000000; i++) {
  arr.push({ [`key${i}`]: `value${i}`, [`key${i+1}A`]: `value${i+1}` });
}

let startExcute, time;

startExcute = process.hrtime();
const text = store(arr);
console.log(process.memoryUsage());
time = process.hrtime(startExcute);
console.log(process.memoryUsage());
console.log("Execution time: %dms",  time[1] / 1000000);

//console.log("======= Store array to text=======\n", text);

startExcute = process.hrtime();
console.log(process.memoryUsage());
const arrDecode = load(text);
console.log(process.memoryUsage());
time = process.hrtime(startExcute);
console.log("Execution time: %dms",  time[1] / 1000000);

//console.log("======= Decode text=======\n", arrDecode);