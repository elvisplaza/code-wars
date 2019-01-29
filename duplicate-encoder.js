function duplicateEncode(word){
  let letter = word.toLowerCase().split("")

  let counts = letter.reduce(function(counts, letter) {
        counts[letter] = (counts[letter] || 0) + 1;
        return counts;
      }, {})

  let results = letter.map((letter)=>{
      return counts[letter] > 1 ? ')' : '('
    }).join(' ')

    return results
}

console.log(duplicateEncode("success"));