import { store, load } from "./lib";

function main() {
  let arr = [];
  for (let i = 0; i <= 10; i++) {
    arr.push({ [`key${i}`]: `value${i}`, [`key${i+1}A`]: `value${i+1}` });
  }

  let startExcute, time, used;

  startExcute = process.hrtime();
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  const text = store(arr);
  time = process.hrtime(startExcute);
  console.log("Execution time: %dms",  time[1] / 1000000);
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

  console.log("======= Store array to text=======\n", text);

  startExcute = process.hrtime();
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  const arrDecode = load(text);
  time = process.hrtime(startExcute);
  console.log("Execution time: %dms",  time[1] / 1000000);

  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  console.log("======= Decode text=======\n", arrDecode);
}

main();
