function accum(s) {
  let results = []
	for(let i=0; i<s.length; i++){
    let cap = s[i].toUpperCase()
    let repeat = s[i].repeat(i).toLowerCase();
    let join = cap.concat(repeat)
    results.push(join)
  }
return results.join('-')
}

console.log(accum('ZpglnRxqenU'));