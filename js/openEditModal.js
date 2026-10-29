function openEditModal(id) {
  const employee = employees.find((e) => e.id === id);
  // Ignore if the employee is gone or a modal is already open
  if (!employee || document.querySelector(".modal-overlay")) return;

  // Overlay + modal box, built with DOM methods
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;";

  const modal = document.createElement("div");
  modal.style.cssText =
    "background:#fff;padding:1.5rem;border-radius:8px;width:320px;max-width:90%;";
  modal.innerHTML = `
    <h2>Edit Employee</h2>
    <form id="edit-form" novalidate>
      <p><strong id="edit-name"></strong></p>
      <p><label>Role<br><input id="edit-role" type="text"></label></p>
      <p><label>Score (0-100)<br><input id="edit-score" type="number"></label></p>
      <p id="edit-error" role="alert" style="color:#b42318;min-height:1.2em;"></p>
      <button type="submit">Save</button>
      <button type="button" id="edit-cancel">Cancel</button>
    </form>`;

  // Fill values via DOM properties so names/roles can't inject HTML
  modal.querySelector("#edit-name").textContent = employee.name;
  modal.querySelector("#edit-role").value = employee.role;
  modal.querySelector("#edit-score").value = employee.score;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Closing: Cancel button, clicking outside the box, or Escape
  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKey);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  modal.querySelector("#edit-cancel").addEventListener("click", close);

  // Submitting: validate, update, redraw
  modal.querySelector("#edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const error = modal.querySelector("#edit-error");
    const role = modal.querySelector("#edit-role").value.trim();
    const scoreText = modal.querySelector("#edit-score").value.trim();
    const score = Number(scoreText);

    if (!role) {
      error.textContent = "Role is required.";
      return;
    }
    if (scoreText === "" || Number.isNaN(score) || score < 0 || score > 100) {
      error.textContent = "Score must be a number between 0 and 100.";
      return;
    }

    employee.role = role;
    employee.score = score;
    close();
    renderAll();
  });

  modal.querySelector("#edit-role").focus();
}
