const container = document.getElementById("cities-container");

cities.forEach(city => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

  col.innerHTML = `
    <article class="card h-100 city-card" data-city="${city.name}">
      <div class="card-body text-center">
        <h5>${city.name}</h5>
        <p class="display-6">${city.temp}°C</p>
        <span class="badge bg-primary">${city.status}</span>
      </div>
    </article>
  `;

  col.querySelector(".city-card").addEventListener("click", () => {
    localStorage.setItem("selectedCity", JSON.stringify(city));
    window.location.href = "detail.html";
  });

  container.appendChild(col);
});
