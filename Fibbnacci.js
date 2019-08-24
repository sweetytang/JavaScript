
  var value;                                                  //下一个递归函数
  var active = false;                                  //递归信号
  var accumulated = [];                         //复制arguments的参数，不然下一个函数调用参数时候还需要参考上一个函数的arguments参数，那么上一个函数的调用帧一直存在

  function f(n , ac1 = 1 , ac2 = 1) {
    if( n <= 1 ) {return ac2};
  
    return sum (n - 1, ac2, ac1 + ac2);
  }

   function sum() {
    
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  }



console.log(sum(100))