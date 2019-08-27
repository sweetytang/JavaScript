function Obj(value) {
    this.value = value;
    this.next = null;
  }
  
  Obj.prototype[Symbol.iterator] = function() {
    var current = this;
    return {
        next() {
        if (current) {
          var value = current.value;
          current = current.next;
          return { done: false, value: value };
        } else {
          return { done: true };
        }
      }
    }
  }
  
  var one = new Obj(1);
  var two = new Obj(2);
  var three = new Obj(3);
  
  one.next = two;
  two.next = three;
  
  for (var i of one){
    console.log(i); 
  }