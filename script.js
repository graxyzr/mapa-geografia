// Inicializa o mapa, centralizado no Brasil
const map = L.map('map').setView([-14.235, -51.9253], 4); // Coordenadas centrais do Brasil

// Adiciona a camada base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Adiciona a camada WMS do PRODES
const wmsLayer = L.tileLayer.wms("https://terrabrasilis.dpi.inpe.br/geoserver/prodes-brasil-nb/prodes_brasil/wms", {
    layers: 'prodes_brasil',
    format: 'image/png',
    transparent: true,
    attribution: 'Dados: INPE / TerraBrasilis'
});

// Adiciona a camada ao mapa
wmsLayer.addTo(map);
