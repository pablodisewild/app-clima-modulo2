// Listado de ciudades con datos extra para el detalle
const ciudades = [
    { id: 1, nombre: "Santiago", temp: "25°C", icono: "☀️", humedad: "30%", viento: "15 km/h" },
    // ... resto de ciudades
];

// Captura de parámetros de la URL
const params = new URLSearchParams(window.location.search);
const idCiudad = params.get('id');

// Busco la ciudad por ID
const ciudad = ciudades.find(c => c.id == idCiudad);

if (ciudad) {
    // Cargo la info en el DOM
    document.getElementById('nombre-ciudad').innerText = `Clima en ${ciudad.nombre}`;
    document.getElementById('humedad-detalle').innerText = `Humedad: ${ciudad.humedad}`;
    document.getElementById('viento-detalle').innerText = `Viento: ${ciudad.viento}`;

    // Genero el pronóstico semanal
    const contenedor = document.getElementById('pronostico-semanal');
    const dias = ["Lun", "Mar", "Mié", "Jue", "Vie"];

    dias.forEach(dia => {
        contenedor.innerHTML += `
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p>${dia}</p>
                        <span>☀️</span>
                        <p>20°C</p>
                    </div>
                </div>
            </div>`;
    });
}