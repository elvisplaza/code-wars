function persistence(num) {
  let counter = 0;
  let finishedNum = num

  let newNumString=(numArray)=>{
      finishedNum = numArray.toString().split("").reduce((acc,curr)=>{
      acc= Number(acc);
      curr= Number(curr);
      return acc * curr
    },1)
    counter++
    return finishedNum
  };
  while(finishedNum.toString().length !== 1){
    newNumString(finishedNum)
  }
  return counter
}

// refactored fromt top answer

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
}
console.log(persistence(999));
console.log('hello world');
