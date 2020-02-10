{
  function accum(str) {
    const arr = str.split('');
    const result = arr.map((letter, index) => {
      const temp = [letter.toUpperCase()];

      for(let i = 0; i < index; i++) {
        temp.push(letter.toLowerCase());
      }

      return temp.join('');
    });

    return result.join('-');
  }

  //console.log(accum("abcd") )
}
