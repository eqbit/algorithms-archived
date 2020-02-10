{
  const sum = a => {
    let sumx = b => sum(a+b);
    sumx[Symbol.toPrimitive] = () => a;
    return sumx;
  };

  //console.log(sum(0))
}
