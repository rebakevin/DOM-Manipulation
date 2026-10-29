function updateSummary() {
  const container = document.getElementById("summary");
  if (!container) return;

  container.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("summary-card");

  const title = document.createElement("h3");
  title.textContent = "Summary";
  card.appendChild(title);

  const totalEmployees = employees.length;
  let totalScore = 0;
  let highestScore = -1;
  let topPerformer = "N/A";

  for (let i = 0; i < employees.length; i++) {
    const score = Number(employees[i].score);
    totalScore += score;

    if (score > highestScore) {
      highestScore = score;
      topPerformer = employees[i].name;
    }
  }

  let averageScore = 0;
  if (totalEmployees > 0) {
    averageScore = (totalScore / totalEmployees).toFixed(1);
  }

  const totalElement = document.createElement("p");
  totalElement.textContent = "Total Employees: " + totalEmployees;
  card.appendChild(totalElement);

  const averageElement = document.createElement("p");
  averageElement.textContent = "Average Score: " + averageScore;
  card.appendChild(averageElement);

  const topElement = document.createElement("p");
  topElement.textContent = "Top Performer: " + topPerformer;
  card.appendChild(topElement);

  container.appendChild(card);
}
