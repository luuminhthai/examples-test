"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = store;
exports.load = load;

function store(arr) {
  if (!arr) return null;
  var text = "";

  var _loop = function _loop(i) {
    var tmp = '';
    Object.keys(arr[i]).map(function (key) {
      tmp = "".concat(tmp).concat(tmp ? ';' : '').concat(key, "=").concat(arr[i][key]);
    });

    if (tmp) {
      text = text + tmp + '\n';
    }
  };

  for (var i = 0; i < arr.length; i++) {
    _loop(i);
  }

  return text.substring(0, text.length - 1);
}

function splitObj(str, obj) {
  var tmp = [];

  if (str.indexOf('=') != -1) {
    tmp = str.split('=');
    obj[tmp[0]] = tmp[1];
  }

  return obj;
}

function load(text) {
  if (!text) return null;
  var tmp = [];
  var arrs = text.split('\n');
  return arrs.map(function (item) {
    var obj = {};

    if (item.indexOf(';') != -1) {
      tmp = item.split(';');
      tmp.forEach(function (subArr) {
        obj = splitObj(subArr, obj);
      });
      return obj;
    }

    return splitObj(item, obj);
  }).filter(function (item) {
    return item;
  });
}