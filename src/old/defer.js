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
    console.log( a + b );
  }

  Function.prototype.defer = function(ms) {
    let self = this;

    return function(...args) {
      setTimeout(() => {
        self.apply(this, args)
      }, ms)
    }
  };

  //f.defer(10000)(1, 2); // выведет 3 через 1 секунду.
}
