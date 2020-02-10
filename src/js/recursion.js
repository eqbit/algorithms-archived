(function(){
  const sumTo = (num) => num === 1 ? num : num + sumTo(num - 1);

  const sumToLoop = (num) => {
    let result = 0;
    for(let i = 1; i <= num; i ++) {
      result += i;
    }

    return result;
  };

  const sumToProgression = (num) => (1 + num) * num / 2;

  const factorial = (num) => num === 1 ? num : num * factorial(num - 1);

  const fibonacci = (num) => {
    let n1 = 1;
    let n2 = 1;

    for(let i = 3; i <= num; i ++) {
      let sum = n1 + n2;
      n1 = n2;
      n2 = sum;
    }

    return n2;
  };

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  const printList = list => {
    const values = [list.value];
    let next = list.next;

    while(next) {
      values.push(next.value)
      next = next.next;
    }

    values.reverse().forEach(item => console.log(item))
  };

  const printListRecursive = list => {
    console.log(list.value);

    if(list.next) {
      printListRecursive(list.next)
    }
  };

  const add = function(a) {
    if(!a) return 0;

    const subAdd = function(b) {
      if(!b) return a;

      return add(a + b);
    };

    subAdd[Symbol.toPrimitive] = function() {
      return a;
    };

    return subAdd
  };

  //console.log(add(2)(4) + 5)

  //printList(list);
})();
