function sortTransform(a){

  let sortAndTransform = [];
  const lastNum = a.length - 1;
  const secLastNum = a.length - 2;

  let arrayOfNums = [a[0], a[1], a[secLastNum], a[lastNum]].map((num)=>String.fromCharCode(num)).join('')

  let sort1= a.sort((a,b)=>a-b)
  let string1= [sort1[0], sort1[1],sort1[secLastNum],sort1[lastNum]].map((num)=>String.fromCharCode(num)).join('')

  let sort2= a.sort((a,b)=> b - a);
  let string2= [sort2[0], sort2[1],sort2[secLastNum],sort2[lastNum]].map((num)=>String.fromCharCode(num)).join('')

  let sort3 = a.sort((a,b)=> b-a);
  let string3 = [sort3[0], sort3[1],sort3[secLastNum],sort3[lastNum]].map((num)=>String.fromCharCode(num)).sort().join('')

  sortAndTransform.push(arrayOfNums,string1,string2,string3)
  let finalAnswer = sortAndTransform.join('-')

}

console.log(sortTransform([121, 122, 123, 124, 125, 120, 122, 132]))                  