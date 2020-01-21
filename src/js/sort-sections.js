(function(){
  const incomingData = [
    ['Санкт Петербург', 'Точка 3'],
    ['Начало', 'Санкт Петербург'],
    ['Москва', 'Конец'],
    ['Точка 3', 'Москва']
  ];

  const getSortedAdvanced = incomingData => {
    const hash = {};

    for(let i = 0; i < incomingData.length; i++) {
      hash[incomingData[i]] = i;
    }

    const getStart = incomingData => {
      return incomingData.reduce((start, item) => {
        return incomingData.map(subItem => subItem[1]).includes(item[0])
          ? start
          : item
      }, incomingData[0])
    };

    const getNext = (incomingData, previous) => {
      return incomingData.find(item => item[0] === previous[1])
    };

    const getResult = (incomingData, currentData, result) => {
      if(!currentData) {
        const start = getStart(incomingData);
        currentData = incomingData;
        currentData.splice(hash[start], 1);
        return getResult(incomingData, currentData, [start]);
      }

      const next = getNext(currentData, result[result.length - 1]);

      if(next)
        result.push(next);

      currentData.splice(hash[next], 1);

      if(currentData.length > 1) {
        return getResult(incomingData, currentData, result);
      }

      return result;
    };

    return getResult(incomingData);
  };


  //console.log(getSortedAdvanced(incomingData));
})();