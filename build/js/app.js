{
  const table = document.body.childNodes[3].firstElementChild;
  const rows = table.children;

  for (let i = 0; i < rows.length; i++) {
    const target = rows[i].children[i];
    target.style.background = 'red';
  }
}
//# sourceMappingURL=app.js.map
