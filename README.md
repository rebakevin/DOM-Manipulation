# InsightFlow Dashboard

Vanilla JS employee dashboard. Everything is already wired up: open `index.html` in a browser.
Each person edits **only their own file** in `js/` and fills in the function. Add your own helper code inside your file if needed.

| Person | File | Function(s) |
|--------|------|-------------|
| 1 | `js/renderTable.js` | `renderTable(list)` – table, buttons, row colors |
| 2 | `js/sortEmployees.js` | `sortEmployees(list)`, `deleteEmployee(id)` |
| 3 | `js/filterEmployees.js` | `filterEmployees(list)` – search + role filter |
| 4 | `js/openEditModal.js` | `openEditModal(id)` – edit role/score with validation |
| 5 | `js/openAddModal.js` | `openAddModal()` – add employee form |
| 6 | `js/updateSummary.js` | `updateSummary()` – total, average, top performer |

Shared (don't edit): `js/data.js` (`employees`, `state`, `nextId()`), `js/main.js` (`renderAll()` and event wiring), `css/style.css`.

After changing `employees`, call `renderAll()`.
