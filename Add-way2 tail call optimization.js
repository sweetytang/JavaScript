
  var value;                                                  //下一个递归函数
  var active = false;                                  //递归开始信号，只有第一次的sum可以开始，后面的sum只为了将参数写入accumulated（因为active的原因），随后变成循环，
  var accumulated = [];                         //复制arguments的参数，这是循环进行的信号

  function f(x, y) {
    
    if (y > 0) {
      return sum(x + 1, y - 1)                  //返回的是sum函数
    }
      return x
  }

   function sum() {
    console.log('2');
    accumulated.push(arguments);
    if (!active) {
      active = true;
      console.log('3');
      while (accumulated.length) {
        console.log('4')
        value = f.apply(this, accumulated.shift());
      }
      active = false;                                 //初始化，为了下次递归优化
      return value;                                  //返回最终的计算值
    }
  }



console.log(sum(1, 10))