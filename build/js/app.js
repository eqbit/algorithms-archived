"use strict";

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
};

console.log(getSortedAdvanced(incomingData));
//# sourceMappingURL=app.js.map
