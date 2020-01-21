(function () {
  const fetchNTimes = async (url, n) => {
    let error;
    for (let i = 0; i < n; i++) {
      try {
        return await fetch(url);
      } catch (err) {
        error = err;
      }
    }
    throw error;
  };

  fetchNTimes('http://localhost:3000', 5)
    .then(response => response.text())
    .then(data => console.log(data))
})();