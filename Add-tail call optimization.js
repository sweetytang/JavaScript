
  var value;                                                  //下一个递归函数
  var active = false;                                  //递归信号
  var accumulated = [];                         //复制arguments的参数，不然下一个函数调用参数时候还需要参考上一个函数的arguments参数，那么上一个函数的调用帧一直存在

  function f(x, y) {
    console.trace();
    if (y > 0) {
      return sum(x + 1, y - 1)                  //返回的是sum函数
    }
      return x
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



console.log(sum(1, 10))