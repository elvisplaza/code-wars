function seven(m){
  let counter = 0;
  let newM = m
  // let last = newM.toString();
  // let lastDig = last[last.length - 1]
  // let divByTen = Math.floor(m / 10)


  while(newM % 7 === 0){
    counter++
    let last = newM.toString();
    let lastDig = last[last.length - 1]
    let divByTen = Math.floor(m / 10)
    newM = divByTen - (2 * lastDig);
    console.log(newM);
    


  }
} 





    
    console.log(seven(371)); 

    // console.log(seven(483)); 