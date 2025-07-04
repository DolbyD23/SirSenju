const scenarios = [
  { title: "What if Wakari Senju was never blinded?", category: "Clan-centric", text: "..." },
  { title: "What if the Energetic Guardians fell during the Abyssal War?", category: "Multiversal", text: "..." },
  { title: "What if Sahil succeeded in consuming the Nexus of Potential?", category: "Villain Focus", text: "..." }
  // Add full text content here in production
];

const container = document.getElementById("scenarioContainer");
const filter = document.getElementById("filter");
const randomBtn = document.getElementById("randomBtn");
const darkToggle = document.getElementById("darkModeToggle");

function renderScenarios(filterType = "All") {
  container.innerHTML = "";
  scenarios
    .filter(s => filterType === "All" || s.category === filterType)
    .forEach(s => {
      const block = document.createElement("div");
      block.className = "scenario";
      block.innerHTML = `<h2>${s.title}</h2><p>${s.text}</p>`;
      container.appendChild(block);
    });
}

randomBtn.onclick = () => {
  const rand = scenarios[Math.floor(Math.random() * scenarios.length)];
  container.innerHTML = `<div class='scenario'><h2>${rand.title}</h2><p>${rand.text}</p></div>`;
};

filter.onchange = e => renderScenarios(e.target.value);
darkToggle.onchange = () => document.body.classList.toggle("dark-mode");

document.addEventListener("DOMContentLoaded", () => renderScenarios());
