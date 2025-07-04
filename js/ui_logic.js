document.getElementById("randomBtn").addEventListener("click", () => {
  const scenarios = document.querySelectorAll(".scenario");
  if (scenarios.length) {
    const index = Math.floor(Math.random() * scenarios.length);
    scenarios[index].scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("darkModeToggle").addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll(".scenario").forEach(card => {
      card.style.display = (filter === "All" || card.dataset.tag === filter) ? "block" : "none";
    });
  });
});
