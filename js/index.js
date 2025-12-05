const requestURL = 'json/houses.json';

function createHousesCard({id, image, price, city, description}) {
    return `
        <div class="card" style="width: 18rem;" id="cardHouse">
            <img src="${image}" class="card-img-top" alt="Imagen de la casa">
            <div class="card-body">
                <h5 class="card-title">${id}. ${city} ${price}€</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
    `;
}

async function fetchHousesJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

async function displayHouses() {
    const houseSection = document.getElementById('housesSection');
    const housesData = await fetchHousesJson();
    if (housesData && housesData.houses) {
        const houseCards = housesData.houses.map(createHousesCard).join('');
        houseSection.innerHTML = houseCards;
    }else{
        houseSection.innerHTML = '<p>No se pudieron cargar los datos de las casas.</p>';
    }
}

displayHouses();