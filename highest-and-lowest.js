function highAndLow(numbers){
  let orderNum = numbers.split(' ').sort((a,b)=>a-b)
    return numbers.length !== 1 ? `${orderNum[orderNum.length - 1]} ${orderNum[0]}` : numbers
}

console.log(highAndLow("4 3 1 2 2 -29 -299 9999"));

//find the highest and lowest number and display it
//refactoring 
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}