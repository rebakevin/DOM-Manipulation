function sortEmployees(list) {
  return [...list].sort((a, b) => {
    const first = a[state.sortKey];
    const second = b[state.sortKey];
    const comparison = typeof first === "string"
      ? first.localeCompare(second)
      : first - second;

    return state.sortAsc ? comparison : -comparison;
  });
}

function deleteEmployee(id) {
  const index = employees.findIndex((employee) => employee.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
    renderAll();
  }
}
