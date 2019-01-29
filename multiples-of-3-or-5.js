function solution(number){
  let sum = [];
  for(let i = 1; i < number; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
      sum.push(i)
    } else if(i % 3 === 0 || i % 5 === 0){
      sum.push(i)
    }
  
  }
  return sum.reduce((acc,total)=>acc + total, 0);
}

console.log(solution(20))

// refactored from number 1

function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}