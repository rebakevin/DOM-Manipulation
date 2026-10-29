function filterEmployees(list) {
  return list.filter((emp) => {
    const matchesName = emp.name.toLowerCase().includes(state.search.toLowerCase());
    const matchesRole = !state.role || emp.role === state.role;
    return matchesName && matchesRole;
  });
}
