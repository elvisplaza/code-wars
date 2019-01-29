function findOutlier(integers){
  let result= integers.filter((number)=>{
    if(number % 2 !== 0){
      return number
    } else if(number % 2 == 1) {
      return number
    }
  })
  return result
}

console.log(findOutlier([2,6,8,10,3]));