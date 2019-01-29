const getSum = (a,b)=>{
  let sum = [a,b].sort((a,b)=>a-b);
  let total = 0
  for(let i=sum[0]; i <= sum[1]; i++){
    total += i
  }
  return total
}

// refactor from best one
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
     

console.log(getSum(0,-1));
console.log(getSum(0,3));