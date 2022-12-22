const getReadyTables = () => {
  const readyTables = [];
  for (let i = 0; i < 2; i++) {
    readyTables.push(Math.round(Math.random() * 20) + 1);
  }
  return readyTables;
};

const displayTables = (tablesArr) => {
  const section = document.getElementById("tables");
  section.innerHTML = tablesArr
    .map((t) => `<div class="table">${t}</div>`)
    .join("");
};

displayTables(getReadyTables());
