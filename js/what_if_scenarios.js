const scenarios = [
  {
    "title": "What if Wakari Senju was never blinded?",
    "category": "Clan-centric",
    "lore": "In this timeline, Wakari retains his sight throughout childhood and adolescence. This single shift leads to a dramatically different evolution in his combat philosophy, sense training, and emotional journey. No longer forced to rely on extrasensory perception, Wakari's style is more visually aggressive but lacks the calm intuition that defined his blind technique. His bond with Asa grows more openly, but his rivalry with Kael intensifies due to unchecked pride. The blinding moment in canon that shaped his humility never occurs\u2014altering the course of his destiny and those around him."
  },
  {
    "title": "What if the Energetic Guardians fell during the Abyssal War?",
    "category": "Multiversal",
    "lore": "During the Abyssal War, the Energetic Guardians are overwhelmed by forces from the Shadowlands and the cult of Ruin. Without their intervention, Nexus points across multiple realities destabilize. Ethereal and Elemental balances collapse. Entire planets are consumed in energy feedback storms. Wakari must rise prematurely as Earth's protector, while Sahil uses the chaos to secure forbidden relics. Asa's healing abilities evolve rapidly to match the need, and Thalon is forced into an alliance with rival clans. This alternate path sparks a darker, survivalist version of the multiversal resistance."
  },
  {
    "title": "What if Sahil succeeded in consuming the Nexus of Potential?",
    "category": "Villain Focus",
    "lore": "In this dark timeline, Sahil completes the forbidden ritual and fully absorbs the Nexus of Potential. The multiverse recoils. Time fractures, alternate selves bleed into one another, and resistance movements crumble. Sahil becomes a living embodiment of adaptive growth. The Arbiter intervenes, but even their influence wavers. Miguel Senju is hunted for his latent connection to the Nexus' remnants, leading to a final standoff across the fragmented ruins of Earth\u2019s energy fields."
  }
];


function renderScenarios(filter = "All") {
  const container = document.getElementById("scenarioContainer");
  container.innerHTML = '';

  const filtered = scenarios.filter(s => filter === "All" || s.category === filter);

  filtered.forEach(scenario => {
    const block = document.createElement('div');
    block.className = 'scenario-block';

    block.innerHTML = `
      <h2 class="scenario-title">${scenario.title}</h2>
      <div class="scenario-lore hidden">${scenario.lore}</div>
    `;

    block.querySelector('.scenario-title').addEventListener('click', () => {
      const lore = block.querySelector('.scenario-lore');
      lore.classList.toggle('hidden');
    });

    container.appendChild(block);
  });
}

document.getElementById("filter").addEventListener("change", (e) => {
  renderScenarios(e.target.value);
});

document.getElementById("randomBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  renderScenarios("All");

  setTimeout(() => {
    const allBlocks = document.querySelectorAll(".scenario-block");
    if (allBlocks[randomIndex]) {
      allBlocks[randomIndex].scrollIntoView({ behavior: "smooth" });
      allBlocks[randomIndex].querySelector('.scenario-lore').classList.remove('hidden');
    }
  }, 100);
});

renderScenarios();
