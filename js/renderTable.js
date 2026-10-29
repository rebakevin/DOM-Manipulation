function renderTable(list) {
  const container = document.getElementById("table-container");
  container.innerHTML = "";

  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  [["Name", "name"], ["Role", "role"], ["Score", "score"], ["Actions", null]].forEach(([label, key]) => {
    const th = document.createElement("th");
    th.textContent = label;
    if (key) th.dataset.sort = key;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  list.forEach((emp) => {
    const row = document.createElement("tr");

    if (emp.score >= 85) row.classList.add("row-green");
    else if (emp.score >= 70) row.classList.add("row-yellow");
    else row.classList.add("row-red");

    [emp.name, emp.role, emp.score].forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });

    const actions = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => openEditModal(emp.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteEmployee(emp.id));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    row.appendChild(actions);

    table.appendChild(row);
  });

  container.appendChild(table);
}
