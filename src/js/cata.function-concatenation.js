{
  Function.prototype.pipe = function(func) {
    return function(param) {
      return func(this(param));
    }.bind(this);
  };

  let addOne = function(e) {
    return e + 1;
  };

  let square = function(e) {
    return e * e;
  };

  let result = [2,2,3,4,5].map(addOne.pipe(square)); //-> [4,9,16,25,36]
  //console.log(result)
}
