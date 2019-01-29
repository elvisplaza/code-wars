function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}
//replace uses the reg expression to match when you need and the second arguement allows you explain how you want to replace the first string.

console.log(longest("aretheyhere", "yestheyarehere"));

console.log(longest("inmanylanguages", "theresapairoffunctions"));
