const employees = [
  { id: 1, name: "Alice Johnson", role: "Developer", score: 88 },
  { id: 2, name: "James Smith", role: "Designer", score: 73 },
  { id: 3, name: "Fatou Kamara", role: "Project Manager", score: 91 },
  { id: 4, name: "David Mwangi", role: "QA Engineer", score: 64 },
];

const state = {
  sortKey: "name",   // "name" | "role" | "score"
  sortAsc: true,
  search: "",        // text typed in the search bar
  role: "",          // selected role ("" = all roles)
};

function nextId() {
  return employees.reduce((max, e) => Math.max(max, e.id), 0) + 1;
}
