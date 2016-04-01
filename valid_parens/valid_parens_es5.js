var parens = function(str) {
  var splittingArray = str.split(''),
      newObj = {},
      i = 0,
      len = splittingArray.length,
      open = '(',
      closed = ')',
      current;

  for(i; i < len; i++) {
    current = splittingArray[i];

    if(newObj[closed] > newObj[open]) {
      return false;
    }

    if(newObj[current]) {
      newObj[current] += 1;
    }else {
      newObj[current] = 1;
    }
  }

  if(newObj[closed] === newObj[open]){
    return true
  }else {
    return false;
  }

}

console.log(parens('(())')) // true
console.log(parens('))((')) // false
console.log(parens('(()')) // false
