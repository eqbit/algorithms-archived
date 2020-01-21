(function() {
  const incomingString = 'aa1AaabbbCccAaaA32233aaBbbbbCccCCccccc';

  String.prototype.cleanup = function() {
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
      if(!index) return;

      if(letter === current.letter) {
        current.quantity++
      } else {
        updateResult();

        current = {
          letter: letter,
          quantity: 1
        };
      }
    });

    updateResult();

    return(result.join(''));
  };

  console.log(countLetters(incomingString));
})();