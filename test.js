let hare = 5;
let tortoise = 11;


for(let j=0;j<20;j++)
{
 if(hare < tortoise)
   hare *= 2;
 else if(hare == tortoise)
   break;
 else
   tortoise += 1;
}
return hare + tortoise;

console.log(test());