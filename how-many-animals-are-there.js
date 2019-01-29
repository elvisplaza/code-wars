function countAnimals(sentence){
return (sentence.match(/\d+/g) || []).reduce((r, e) => r + +e, 0);

}

console.log(countAnimals("96 n z kz bfnp e 85 oxvg xy rkg 32 bpc turv cp ioh qad noxxg cc wnfp"));