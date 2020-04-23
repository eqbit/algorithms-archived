(function() {
  const incomeData = [1,2,3,4,5,6,7,8,9];
  const shift = 3;

  const shiftArray = (incomeData, shift) => {
    for(let i = 0; i < shift; i++) {
      incomeData.unshift(incomeData.pop());
    }

    return incomeData;
  };

  //console.log(shiftArray(incomeData, shift));
})();