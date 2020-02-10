{
  function powerSumDigTerm(n) {
    const computed = [];
    for (let i = 2; i < 50; i++) {

      for(let j = 2; j < 11; j++) {
        const num = Math.pow(i, j);

        const digits = num.toString().split('').map(item => parseInt(item));
        const sum = digits.reduce((item, sum) => +item + sum);

        if(sum === i) {
          computed.push(num);
        }
      }
    }

    return computed.sort((a, b) => a - b)[n - 1];
  }
}
