(function() {
  [...document.getElementById('root').getElementsByTagName('div')].forEach(element => {
    element.addEventListener('click', function() {
      const ids = [];
      let next = this;
      while (next) {
        ids.push(next.id);
        next = next.parentNode;

        if(next.id === 'root')
          break;
      }
      //console.log(ids);
    });
  });
})();
