function DNAStrand(dna){
  let regEx = /([ATCG])/ig
  let mapObj = {
    A:"T",
    T:"A",
    C:"G",
    G:"C"
  }
  let strand = dna.replace(regEx, (matched)=>{
      return mapObj[matched]
  })
  console.log(strand);

  // for(let i=0; i<dna.length; i++){
  //   if(dna[i].toLowerCase() === "a"){
  //     strand.push("T")
  //   } else if(dna[i].toLowerCase() === "t"){
  //     strand.push("A")
  //   } else if(dna[i].toLowerCase()=== "c"){
  //     strand.push("G")
  //   } else {
  //     strand.push("C")
  //   }
  // }
  // return strand.join("")
}

console.log(DNAStrand("TAACGTA"));