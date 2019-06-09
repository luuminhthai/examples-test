"use strict";

var _lib = require("./lib");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function main() {
  var arr = [];

  for (var i = 0; i <= 10; i++) {
    var _arr$push;

    arr.push((_arr$push = {}, _defineProperty(_arr$push, "key".concat(i), "value".concat(i)), _defineProperty(_arr$push, "key".concat(i + 1, "A"), "value".concat(i + 1)), _arr$push));
  }

  var startExcute, time, used;
  startExcute = process.hrtime();
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
  var text = (0, _lib.store)(arr);
  time = process.hrtime(startExcute);
  console.log("Execution time: %dms", time[1] / 1000000);
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
  console.log("======= Store array to text=======\n", text);
  startExcute = process.hrtime();
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
  var arrDecode = (0, _lib.load)(text);
  time = process.hrtime(startExcute);
  console.log("Execution time: %dms", time[1] / 1000000);
  used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
  console.log("======= Decode text=======\n", arrDecode);
}

main();