{
  const cachingDecorator = f => {
    const cache = new Map();

    return function(arg) {
      if(cache.has(arg)) {
        return cache.get(arg);
      }

      const result = f(arg);
      cache.set(arg, result);

      return result;
    }
  };

  const sumToRec = (num) => num === 1 ? 1 : num + sumToRec(num - 1);

  const sumToLoop = (num) => {
    let sum = num;

    while(num--) {
      sum += num;
    }

    return sum;
  };

  const sumToProgression = (num) => (1 + num) * num / 2;

  const factorial = (num) => num === 1 ? 1 : num * factorial(num - 1);

  let fibonacci = (num) => {
    let cache = {
      0: 1,
      1: 1,
    };

    for (let i = 2; i < num; i++) {
      cache[i] = cache[i-1] + cache[i-2];
    }

    return cache[num-1];
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

  const printList = (list) => {
    console.log(list.value);

    if(list.next) {
      printList(list.next)
    }
  };

  const printListLoop = (list) => {
    console.log(list.value);
    while(true) {
      list = list.next;
      console.log(list.value);

      if(!list.next) break;
    }
  };

  const printListReversed = (list) => {
    if(list.next) {
      printListReversed(list.next)
    }
    console.log(list.value);
  };

  const printListReversedLoop = (list) => {
    const values = [list.value];

    while(true) {
      list = list.next;
      values.push(list.value);
      if(!list.next) break;
    }

    values.reverse().forEach(value => console.log(value))
  };

  //printListReversed(list);
}
