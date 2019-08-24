function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;                                                                    //通过运行一个新函数，来结束上一个函数的调用帧
}

function sum(x, y) {
    console.trace();
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1);              //返回一个新的函数，避免在上一个函数的内部来运行，从而避免递归执行
  } 
    return x;
}

trampoline(sum(1, 10))