function spinWords(string){
  let arrayOfWords = string.split(" ").map((word)=>{
    if(word.length >= 5){
      let newWord = word.split("")
      newWord.reverse()
      let reverseString = newWord.join("")
      return reverseString
    } else {
      return word
    }
  })
  return arrayOfWords.join(" ")
}

console.log(spinWords("hey my fellow warriors omg"))