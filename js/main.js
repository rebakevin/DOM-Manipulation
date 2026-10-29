// Setup – already wired, no changes needed.

// Re-render everything from the current data + view state
function renderAll() {
  populateRoleFilter();
  renderTable(sortEmployees(filterEmployees(employees)));
  updateSummary();
}

function populateRoleFilter() {
  const select = document.getElementById("role-filter");
  const roles = [...new Set(employees.map((e) => e.role))].sort();
  select.innerHTML = "";
  const all = document.createElement("option");
  all.value = "";
  all.textContent = "All roles";
  select.appendChild(all);
  roles.forEach((role) => {
    const opt = document.createElement("option");
    opt.value = role;
    opt.textContent = role;
    select.appendChild(opt);
  });
  select.value = roles.includes(state.role) ? state.role : "";
  state.role = select.value;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderAll();
  });

  document.getElementById("role-filter").addEventListener("change", (e) => {
    state.role = e.target.value;
    renderAll();
  });

  document.getElementById("add-btn").addEventListener("click", openAddModal);

  // Header clicks: any element with data-sort toggles sorting
  document.getElementById("table-container").addEventListener("click", (e) => {
    const th = e.target.closest("[data-sort]");
    if (!th) return;
    const key = th.dataset.sort;
    state.sortAsc = state.sortKey === key ? !state.sortAsc : true;
    state.sortKey = key;
    renderAll();
  });

  renderAll();
});
