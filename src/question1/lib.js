function store(arr) {
  let text = "";
  for (let i = 0; i < arr.length; i++ ) {
    let tmp = '';
    Object.keys(arr[i]).map(key => {
      tmp = `${tmp};${key}=${arr[i][key]}`
    });
    tmp += '\n';
    text += tmp.substring(1, tmp.length)
  }
  return text.substring(1, text.length);
}

function load(text) {
  let tmp = [], tmp3 = [];
  let arrs = text.split('\n');
  return arrs
    .map(item => {
      if (item.indexOf(';') != -1) {
        tmp = item.split(';');
        return tmp.map(subArr => {
          if (subArr.indexOf('=') != -1) {
            tmp3 = subArr.split('=');
            return ({ [tmp3[0]]: tmp3[1]})
          }
        })
      }
    })
    .filter(item => item);
}

export {
  store, 
  load
}
