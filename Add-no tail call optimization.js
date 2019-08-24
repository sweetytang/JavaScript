  function f(x, y) {
    if (y > 0) {
      return f(x + 1, y - 1)                  //返回的是sum函数
    }
      return x
  }

  f(1,10000)