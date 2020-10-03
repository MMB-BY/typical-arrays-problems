exports.min = function min (array) {
    let result = 0;
    try {
    if (array[0] / 1 !== array[0]) {
        return 0;
    }
        result = array[0];
    for ( let i=0; i < array.length; i++){
        if (array[i] < result){
            result = array[i];
        }
        else{
            continue;
        }
    }
  return result;}
  catch{
      return 0;
  }
}

exports.max = function max (array) {
    let result = 0;
    try {
    if (array[0] / 1 !== array[0]) {
        return 0;
    }
        result = array[0];
    for ( let i=0; i < array.length; i++){
        if (array[i] > result){
            result = array[i];
        }
        else{
            continue;
        }
    }
  return result;}
  catch{
      return 0;
  }
}


exports.avg = function avg (array) {
    let result = 0;
    try {
        if (array[0] / 1 !== array[0]) {
            return 0;
        }
        for ( let i=0; i < array.length; i++){
            result += +array[i];
        }
        result = result/array.length;
        return result;
    }
  catch{
      return 0;
  }
}
