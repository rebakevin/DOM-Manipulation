function openAddModal() {
  // Overlay + modal box, built with DOM methods
  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;";

  const modal = document.createElement("div");
  modal.style.cssText =
    "background:#fff;padding:1.5rem;border-radius:8px;width:320px;max-width:90%;";
  modal.innerHTML = `
    <h2>Add Employee</h2>
    <form id="add-form" novalidate>
      <p><label>Name<br><input id="add-name" type="text"></label></p>
      <p><label>Role<br><input id="add-role" type="text"></label></p>
      <p><label>Score (0-100)<br><input id="add-score" type="number"></label></p>
      <p id="add-error" role="alert" style="color:#b42318;min-height:1.2em;"></p>
      <button type="submit">Add</button>
      <button type="button" id="add-cancel">Cancel</button>
    </form>`;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Closing: Cancel button, or clicking outside the box
  const close = () => overlay.remove();
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  modal.querySelector("#add-cancel").addEventListener("click", close);

  // Submitting: validate, add, redraw
  modal.querySelector("#add-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const error = modal.querySelector("#add-error");
    const name = modal.querySelector("#add-name").value.trim();
    const role = modal.querySelector("#add-role").value.trim();
    const scoreText = modal.querySelector("#add-score").value.trim();
    const score = Number(scoreText);

    if (!name || !role) {
      error.textContent = "Name and role are required.";
      return;
    }
    if (scoreText === "" || Number.isNaN(score) || score < 0 || score > 100) {
      error.textContent = "Score must be a number between 0 and 100.";
      return;
    }

    employees.push({ id: nextId(), name, role, score });
    close();
    renderAll();
  });

  modal.querySelector("#add-name").focus();
}