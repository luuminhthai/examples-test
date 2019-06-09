function store(arr) {
  if (!arr) return null;
  let text = "";
  for (let i = 0; i < arr.length; i++ ) {
    let tmp = '';
    Object.keys(arr[i]).map(key => {
      tmp = `${tmp}${tmp ? ';' : ''}${key}=${arr[i][key]}`
    });
    if (tmp) {
      text = text + tmp + '\n';
    }
  }
  return text.substring(0, text.length - 1);
}

function splitObj(str, obj) {
  let tmp = [];
  if (str.indexOf('=') != -1) {
    tmp = str.split('=');
    obj[tmp[0]] = tmp[1];
  }
  return obj;
}

function load(text) {
  if (!text) return null;
  let tmp = [];
  let arrs = text.split('\n');
  return arrs.map(item => {
    let obj = {};
    if (item.indexOf(';') != -1) {
      tmp = item.split(';');
      tmp.forEach(subArr => {
        obj = splitObj(subArr, obj)
      })
      return obj;
    }
    return splitObj(item, obj)
  }).filter(item => item);
}

export {
  store, 
  load
}
