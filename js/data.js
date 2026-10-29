const employees = [
  { id: 1, name: "Maxime Hirwa", role: "Developer", score: 88 },
  { id: 2, name: "Rhoda Umutesi", role: "Designer", score: 73 },
  { id: 3, name: "Charles Angoye", role: "Project Manager", score: 91 },
  { id: 4, name: "Darlene Ayinkamiye", role: "QA Engineer", score: 64 },
  { id: 5, name: "Lincoln Batsinduka", role: "Developer", score: 79 },
  { id: 6, name: "Rebakure Kevin", role: "Designer", score: 85 },
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
