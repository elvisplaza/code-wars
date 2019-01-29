function findOdd(A) {
  let obj = A.reduce((acc,currentValue)=>{
      if(currentValue in acc ){
        acc[currentValue]++
    }else{
      [acc[currentValue] = 1]
    }
    return acc
  },{})
    for( let key in obj){
      console.log(obj);
      if(obj[key]% 2 !== 0){
        console.log(key);
          return Number(key)
      }
    }
}

//refactor using for loop

// function findOdd(arr) {
//   var result, num = 0;
//   let sorted = arr.sort();
//   arr = arr.sort();
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i+1]) {
//       num++;
//     } else {
//       num++;
//       console.log(num);
//       if (num % 2 != 0) {
//         result = arr[i];
//         break;
//       }
//     }
//   }
//   console.log(sorted);
//   return result;
// }
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));