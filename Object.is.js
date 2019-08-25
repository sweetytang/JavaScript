Object.is=function (x,y) {
  if (x===y){
    return x!=0 || 1/x===1/y;
  }else {
    return x!==x && y!==y
  }
};
console.log(Object.is(NaN,NaN));
console.log(Object.is(0,-0))