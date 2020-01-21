"use strict";

(function () {
  var incomeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var shift = 3;

  var shiftArray = function shiftArray(incomeData, shift) {
    for (var i = 0; i < shift; i++) {
      incomeData.unshift(incomeData.pop());
    }

    return incomeData;
  };

  console.log(shiftArray(incomeData, shift));
})();
"use strict";

(function () {
  var incomingString = 'aa1AaabbbCccAaaA32233aaBbbbbCccCCccccc';

  String.prototype.cleanup = function () {
    return this.replace(/[^a-z]+/ig, "");
  };

  var countLetters = function countLetters(incomingString) {
    var lettersArray = incomingString.cleanup().toUpperCase().split('');
    var result = [];
    var current = {
      letter: lettersArray[0],
      quantity: 1
    };

    var updateResult = function updateResult() {
      result.push("".concat(current.letter).concat(current.quantity));
    };

    lettersArray.forEach(function (letter, index) {
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
"use strict";

(function () {
  var incomingData = [['Санкт Петербург', 'Точка 3'], ['Начало', 'Санкт Петербург'], ['Москва', 'Конец'], ['Точка 3', 'Москва']];

  var getSortedAdvanced = function getSortedAdvanced(incomingData) {
    var hash = {};

    for (var i = 0; i < incomingData.length; i++) {
      hash[incomingData[i]] = i;
    }

    var getStart = function getStart(incomingData) {
      return incomingData.reduce(function (start, item) {
        return incomingData.map(function (subItem) {
          return subItem[1];
        }).includes(item[0]) ? start : item;
      }, incomingData[0]);
    };

    var getNext = function getNext(incomingData, previous) {
      return incomingData.find(function (item) {
        return item[0] === previous[1];
      });
    };

    var getResult = function getResult(incomingData, currentData, result) {
      if (!currentData) {
        var start = getStart(incomingData);
        currentData = incomingData;
        currentData.splice(hash[start], 1);
        return getResult(incomingData, currentData, [start]);
      }

      var next = getNext(currentData, result[result.length - 1]);
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
