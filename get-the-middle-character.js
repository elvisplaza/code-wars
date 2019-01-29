function getMiddle(s){
    let middle = Math.floor(s.length / 2 )
    let midLetter = ""

    if(s.length % 2 === 0){
      midLetter = `${s[middle]}${s[middle - 1]}`
      return midLetter
    } else {
      midLetter = s[middle]
      return midLetter
    }
}

//refactor
function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));