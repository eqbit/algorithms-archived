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
(function () {
  [...document.getElementById('root').getElementsByTagName('div')].forEach(element => {
    element.addEventListener('click', function () {
      const ids = [];
      let next = this;

      while (next) {
        ids.push(next.id);
        next = next.parentNode;
        if (next.id === 'root') break;
      }

      console.log(ids);
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

  fetchNTimes('http://localhost:3000', 5).then(response => response.text()).then(data => console.log(data));
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
