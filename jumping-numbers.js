function jumpingNumber(n){
  let regEx = /./ig
  let numbers = n + ""
  let array = numbers.match(regEx)
  let counter = 0
  let finalAnswer = [];
  for(i=0; counter <= array.length - 1;i++){
    let diff = Math.abs(array[i] - array[i + 1])
    counter++
    if(array.length === 1){
      finalAnswer.push("Jumping!!")
    }
    else if(diff !== 1 ){
      finalAnswer.push("Not!!")
      console.log(array[i]);
      
    } else {
      finalAnswer.push("Jumping!!")
    }
  }
  console.log(finalAnswer);
  if(finalAnswer.includes("Not!!")=== true ){
    return "Not!"
  }else {
    return "Jumping!!"
  }
  
}

console.log(jumpingNumber(7878789));