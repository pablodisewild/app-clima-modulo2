const cities = [
  {
    name: "Arica",
    temp: 22,
    status: "Soleado",
    humidity: 55,
    wind: 14,
    forecast: [22, 23, 22, 21, 22, 23, 24]
  }, 
    // aquí va mi primer comentario dentro de un script en JavaScript jeje saludos
  {
    name: "Iquique",
    temp: 21,
    status: "Despejado",
    humidity: 70,
    wind: 18,
    forecast: [21, 22, 21, 20, 21, 22, 22]
  },
  {
    name: "La Serena",
    temp: 19,
    status: "Parcialmente nublado",
    humidity: 65,
    wind: 16,
    forecast: [19, 20, 19, 18, 19, 20, 21]
  },
  {
    name: "Santiago",
    temp: 18,
    status: "Nublado",
    humidity: 60,
    wind: 12,
    forecast: [18, 17, 19, 20, 18, 16, 17]
  },
  {
    name: "Valparaíso",
    temp: 17,
    status: "Niebla costera",
    humidity: 75,
    wind: 20,
    forecast: [17, 16, 17, 18, 17, 16, 17]
  },
  {
    name: "Concepción",
    temp: 15,
    status: "Nublado",
    humidity: 78,
    wind: 14,
    forecast: [15, 14, 16, 17, 15, 14, 15]
  },
  {
    name: "Temuco",
    temp: 13,
    status: "Lluvioso",
    humidity: 85,
    wind: 10,
    forecast: [13, 12, 14, 15, 13, 12, 13]
  },
  {
    name: "Valdivia",
    temp: 14,
    status: "Lluvioso",
    humidity: 80,
    wind: 10,
    forecast: [14, 13, 15, 16, 14, 13, 12]
  },
  {
    name: "Puerto Montt",
    temp: 12,
    status: "Lluvia ligera",
    humidity: 88,
    wind: 11,
    forecast: [12, 11, 13, 14, 12, 11, 12]
  },
  {
    name: "Punta Arenas",
    temp: 7,
    status: "Ventoso",
    humidity: 70,
    wind: 25,
    forecast: [7, 6, 8, 9, 7, 6, 7]
  }
];
const container = document.getElementById("cities-container");

cities.forEach(city => {
  container.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <article class="card h-100 city-card" onclick="goToDetail('${city.name}')">
        <div class="card-body text-center">
          <h5 class="card-title">${city.name}</h5>
          <p class="display-6">${city.temp}°C</p>
          <span class="badge bg-info">${city.status}</span>
        </div>
      </article>
    </div>
  `;
});

function goToDetail(cityName) {
  window.location.href = `detail.html?city=${encodeURIComponent(cityName)}`;
}