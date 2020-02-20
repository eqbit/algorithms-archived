(function () {
  const incomeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shift = 3;

  const shiftArray = (incomeData, shift) => {
    for (let i = 0; i < shift; i++) {
      incomeData.unshift(incomeData.pop());
    }

    return incomeData;
  }; //console.log(shiftArray(incomeData, shift));

})();
{
  function accum(str) {
    const arr = str.split('');
    const result = arr.map((letter, index) => {
      const temp = [letter.toUpperCase()];

      for (let i = 0; i < index; i++) {
        temp.push(letter.toLowerCase());
      }

      return temp.join('');
    });
    return result.join('-');
  } //console.log(accum("abcd") )

}
{
  Function.prototype.pipe = function (func) {
    return function (param) {
      return func(this(param));
    }.bind(this);
  };

  let addOne = function (e) {
    return e + 1;
  };

  let square = function (e) {
    return e * e;
  };

  let result = [2, 2, 3, 4, 5].map(addOne.pipe(square)); //-> [4,9,16,25,36]
  //console.log(result)
}
{
  function powerSumDigTerm(n) {
    const computed = [];

    for (let i = 2; i < 50; i++) {
      for (let j = 2; j < 11; j++) {
        const num = Math.pow(i, j);
        const digits = num.toString().split('').map(item => parseInt(item));
        const sum = digits.reduce((item, sum) => +item + sum);

        if (sum === i) {
          computed.push(num);
        }
      }
    }

    return computed.sort((a, b) => a - b)[n - 1];
  }
}
{
  class Animal {
    constructor(name) {
      this.name = name;
    }

  }

  class RabbitOld extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }

  }

  let rabbitOld = new RabbitOld("Белый кролик"); // Error: this is not defined
  //console.log(rabbit.name);

  class Clock {
    constructor({
      template
    }) {
      this.template = template;
    }

    render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }

  }

  class ExtendedClock extends Clock {
    constructor({
      template,
      precision
    }) {
      super({
        template
      });
      this.precision = precision || 1000;
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }

  }

  const lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
  }); //lowResolutionClock.start();

  class Rabbit extends Object {
    constructor(name) {
      super();
      this.name = name;
    }

  }

  let rabbit = new Rabbit("Кроль"); //console.log( rabbit.hasOwnProperty('name') );
}
{
  const sum = a => {
    let sumx = b => sum(a + b);

    sumx[Symbol.toPrimitive] = () => a;

    return sumx;
  }; //console.log(sum(0))

}
{
  // function f() {
  //   console.log('hello');
  // }
  //
  // Function.prototype.defer = function(ms) {
  //   let self = this;
  //
  //   setTimeout(() => {
  //     self();
  //   }, ms);
  // };
  //
  // f.defer(10000);
  function f(a, b) {
    console.log(a + b);
  }

  Function.prototype.defer = function (ms) {
    let self = this;
    return function (...args) {
      setTimeout(() => {
        self.apply(this, args);
      }, ms);
    };
  }; //f.defer(10000)(1, 2); // выведет 3 через 1 секунду.

}
(function () {
  [...document.getElementById('root').getElementsByTagName('div')].forEach(element => {
    element.addEventListener('click', function () {
      const ids = [];
      let next = this;

      while (next) {
        ids.push(next.id);
        next = next.parentNode;
        if (next.id === 'root') break;
      } //console.log(ids);

    });
  });
})();
(function () {
  const fetchNTimes = async (url, n) => {
    let error;

    for (let i = 0; i < n; i++) {
      try {
        return await fetch(url);
      } catch (err) {
        error = err;
      }
    }

    throw error;
  };

  fetchNTimes('http://localhost:3000', 5).then(response => response.text()).then(data => {}); //console.log(data)
})();
(function () {
  const incomingString = 'aa1AaabbbCccAaaA32233aaBbbbbCccCCccccc';

  String.prototype.cleanup = function () {
    return this.replace(/[^a-z]+/ig, "");
  };

  const countLetters = incomingString => {
    const lettersArray = incomingString.cleanup().toUpperCase().split('');
    const result = [];
    let current = {
      letter: lettersArray[0],
      quantity: 1
    };

    const updateResult = () => {
      result.push(`${current.letter}${current.quantity}`);
    };

    lettersArray.forEach((letter, index) => {
      if (!index) return;

      if (letter === current.letter) {
        current.quantity++;
      } else {
        updateResult();
        current = {
          letter: letter,
          quantity: 1
        };
      }
    });
    updateResult();
    return result.join('');
  }; //console.log(countLetters(incomingString));

})();
{
  const cachingDecorator = f => {
    const cache = new Map();
    return function (arg) {
      if (cache.has(arg)) {
        return cache.get(arg);
      }

      const result = f(arg);
      cache.set(arg, result);
      return result;
    };
  };

  const sumToRec = num => num === 1 ? 1 : num + sumToRec(num - 1);

  const sumToLoop = num => {
    let sum = num;

    while (num--) {
      sum += num;
    }

    return sum;
  };

  const sumToProgression = num => (1 + num) * num / 2;

  const factorial = num => num === 1 ? 1 : num * factorial(num - 1);

  let fibonacci = num => {
    let cache = {
      0: 1,
      1: 1
    };

    for (let i = 2; i < num; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[num - 1];
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
    console.log(list.value);

    if (list.next) {
      printList(list.next);
    }
  };

  const printListLoop = list => {
    console.log(list.value);

    while (true) {
      list = list.next;
      console.log(list.value);
      if (!list.next) break;
    }
  };

  const printListReversed = list => {
    if (list.next) {
      printListReversed(list.next);
    }

    console.log(list.value);
  };

  const printListReversedLoop = list => {
    const values = [list.value];

    while (true) {
      list = list.next;
      values.push(list.value);
      if (!list.next) break;
    }

    values.reverse().forEach(value => console.log(value));
  }; //printListReversed(list);

}
(function () {
  const incomingData = [['Санкт Петербург', 'Точка 3'], ['Начало', 'Санкт Петербург'], ['Москва', 'Конец'], ['Точка 3', 'Москва']];

  const getSortedAdvanced = incomingData => {
    const hash = {};

    for (let i = 0; i < incomingData.length; i++) {
      hash[incomingData[i]] = i;
    }

    const getStart = incomingData => {
      return incomingData.reduce((start, item) => {
        return incomingData.map(subItem => subItem[1]).includes(item[0]) ? start : item;
      }, incomingData[0]);
    };

    const getNext = (incomingData, previous) => {
      return incomingData.find(item => item[0] === previous[1]);
    };

    const getResult = (incomingData, currentData, result) => {
      if (!currentData) {
        const start = getStart(incomingData);
        currentData = incomingData;
        currentData.splice(hash[start], 1);
        return getResult(incomingData, currentData, [start]);
      }

      const next = getNext(currentData, result[result.length - 1]);
      if (next) result.push(next);
      currentData.splice(hash[next], 1);

      if (currentData.length > 1) {
        return getResult(incomingData, currentData, result);
      }

      return result;
    };

    return getResult(incomingData);
  }; //console.log(getSortedAdvanced(incomingData));

})();
//# sourceMappingURL=app.js.map
