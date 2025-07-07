// Load JSON data
fetch('what_if_scenarios_1_to_52_.json')
    .then(response => response.json())
    .then(data => {
        window.scenarios = data;
        displayScenarios();
    })
    .catch(error => console.error('Error loading JSON:', error));

let currentPage = 1;
const scenariosPerPage = 10;

function displayScenarios() {
    const grid = document.getElementById('scenario-grid');
    grid.innerHTML = '';
    const filter = document.getElementById('category-filter').value.toLowerCase();
    let filteredScenarios = window.scenarios.filter(scenario => 
        !filter || scenario.category.toLowerCase() === filter
    );

    const totalPages = Math.ceil(filteredScenarios.length / scenariosPerPage);
    const start = (currentPage - 1) * scenariosPerPage;
    const end = start + scenariosPerPage;
    const paginatedScenarios = filteredScenarios.slice(start, end);

    paginatedScenarios.forEach((scenario, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-front">
                <h3>${scenario.title}</h3>
                <p>${scenario.category}</p>
                <span class="suit">${getSuit(index)}</span>
            </div>
            <div class="card-back">
                <p>${scenario.lore}</p>
            </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        grid.appendChild(card);
    });

    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
}

function changePage(delta) {
    currentPage += delta;
    displayScenarios();
}

function filterScenarios() {
    currentPage = 1;
    displayScenarios();
}

function getSuit(index) {
    const suits = ['♠', '♥', '♦', '♣'];
    return suits[index % 4];
}

function showRandomScenario() {
    const randomIndex = Math.floor(Math.random() * window.scenarios.length);
    const scenario = window.scenarios[randomIndex];
    const grid = document.getElementById('scenario-grid');
    grid.innerHTML = `
        <div class="card" style="width: 80%; margin: 0 auto;">
            <div class="card-front">
                <h3>${scenario.title}</h3>
                <p>${scenario.category}</p>
                <span class="suit">${getSuit(randomIndex)}</span>
            </div>
            <div class="card-back">
                <p>${scenario.lore}</p>
            </div>
        </div>
    `;
    grid.querySelector('.card').addEventListener('click', () => grid.querySelector('.card').classList.toggle('flipped'));
}