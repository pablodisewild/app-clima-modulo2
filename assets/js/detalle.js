const pronosticosCiudades = {
    "Santiago": [
        { dia: "Lunes", temp: "28°C", estado: "☀️" },
        { dia: "Martes", temp: "30°C", estado: "☀️" },
        { dia: "Miércoles", temp: "27°C", estado: "⛅" },
        { dia: "Jueves", temp: "29°C", estado: "☀️" },
        { dia: "Viernes", temp: "31°C", estado: "🔥" }
    ],
    "Londres": [
        { dia: "Lunes", temp: "15°C", estado: "🌧️" },
        { dia: "Martes", temp: "14°C", estado: "🌦️" },
        { dia: "Miércoles", temp: "17°C", estado: "☁️" },
        { dia: "Jueves", temp: "16°C", estado: "🌧️" },
        { dia: "Viernes", temp: "15°C", estado: "☁️" }
    ],
    "Nueva York": [
        { dia: "Lunes", temp: "18°C", estado: "☁️" },
        { dia: "Martes", temp: "20°C", estado: "⛅" },
        { dia: "Miércoles", temp: "19°C", estado: "☀️" },
        { dia: "Jueves", temp: "17°C", estado: "🌦️" },
        { dia: "Viernes", temp: "21°C", estado: "☀️" }
    ],
    "Tokio": [
        { dia: "Lunes", temp: "22°C", estado: "⛅" },
        { dia: "Martes", temp: "23°C", estado: "☀️" },
        { dia: "Miércoles", temp: "21°C", estado: "☁️" },
        { dia: "Jueves", temp: "24°C", estado: "☀️" },
        { dia: "Viernes", temp: "22°C", estado: "⛅" }
    ],
    "París": [
        { dia: "Lunes", temp: "16°C", estado: "💨" },
        { dia: "Martes", temp: "15°C", estado: "☁️" },
        { dia: "Miércoles", temp: "17°C", estado: "⛅" },
        { dia: "Jueves", temp: "18°C", estado: "☀️" },
        { dia: "Viernes", temp: "16°C", estado: "🌦️" }
    ],
    "Moscú": [
        { dia: "Lunes", temp: "-4°C", estado: "❄️" },
        { dia: "Martes", temp: "-6°C", estado: "❄️" },
        { dia: "Miércoles", temp: "-3°C", estado: "☁️" },
        { dia: "Jueves", temp: "-5°C", estado: "❄️" },
        { dia: "Viernes", temp: "-2°C", estado: "☁️" }
    ],
    "Sidney": [
        { dia: "Lunes", temp: "27°C", estado: "☀️" },
        { dia: "Martes", temp: "29°C", estado: "☀️" },
        { dia: "Miércoles", temp: "28°C", estado: "☀️" },
        { dia: "Jueves", temp: "26°C", estado: "⛅" },
        { dia: "Viernes", temp: "30°C", estado: "🔥" }
    ],
    "Ciudad de México": [
        { dia: "Lunes", temp: "23°C", estado: "☀️" },
        { dia: "Martes", temp: "22°C", estado: "☀️" },
        { dia: "Miércoles", temp: "24°C", estado: "⛅" },
        { dia: "Jueves", temp: "23°C", estado: "☀️" },
        { dia: "Viernes", temp: "25°C", estado: "☀️" }
    ],
    "Berlín": [
        { dia: "Lunes", temp: "11°C", estado: "🌫️" },
        { dia: "Martes", temp: "12°C", estado: "☁️" },
        { dia: "Miércoles", temp: "10°C", estado: "🌧️" },
        { dia: "Jueves", temp: "9°C", estado: "🌫️" },
        { dia: "Viernes", temp: "11°C", estado: "☁️" }
    ],
    "El Cairo": [
        { dia: "Lunes", temp: "33°C", estado: "🔥" },
        { dia: "Martes", temp: "32°C", estado: "☀️" },
        { dia: "Miércoles", temp: "34°C", estado: "🔥" },
        { dia: "Jueves", temp: "35°C", estado: "🔥" },
        { dia: "Viernes", temp: "33°C", estado: "☀️" }
    ]
};

// Capturar parámetros de la URL
const params = new URLSearchParams(window.location.search);
const ciudadSeleccionada = params.get("ciudad");

// Referencias al DOM
const tituloCiudad = document.getElementById("nombre-ciudad");
const contenedorSemanal = document.getElementById("pronostico-semanal");

if (ciudadSeleccionada && pronosticosCiudades[ciudadSeleccionada]) {
    // 1. Actualizar título
    tituloCiudad.innerText = `Clima en ${ciudadSeleccionada}`;
    
    // 2. Datos extra (Simulados para completar tu diseño)
    document.getElementById("humedad-detalle").innerText = `💧 Humedad: ${Math.floor(Math.random() * 40 + 30)}%`;
    document.getElementById("viento-detalle").innerText = `💨 Viento: ${Math.floor(Math.random() * 20 + 5)} km/h`;

    // 3. Renderizar pronóstico semanal
    contenedorSemanal.innerHTML = "";
    pronosticosCiudades[ciudadSeleccionada].forEach(item => {
        contenedorSemanal.innerHTML += `
            <div class="col">
                <div class="card h-100 shadow-sm border-0 bg-light">
                    <div class="card-body text-center">
                        <p class="text-muted fw-bold mb-1">${item.dia}</p>
                        <div class="fs-2 mb-2">${item.estado}</div>
                        <p class="h4 mb-0 text-primary">${item.temp}</p>
                    </div>
                </div>
            </div>
        `;
    });
} else {
    tituloCiudad.innerText = "Ciudad no encontrada";
}