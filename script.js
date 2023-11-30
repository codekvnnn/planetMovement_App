// This is a placeholder for fetching real planetary data
function loadPlanetaryData() {
    const planets = [
        { name: "Mercury", position: "0.387 AU" },
        { name: "Venus", position: "0.723 AU" },
        // Add other planets
    ];

    const planetaryDataDiv = document.getElementById('planetary-data');
    planets.forEach(planet => {
        const p = document.createElement('p');
        p.innerText = `${planet.name}: ${planet.position}`;
        planetaryDataDiv.appendChild(p);
    });
}

window.onload = loadPlanetaryData;
