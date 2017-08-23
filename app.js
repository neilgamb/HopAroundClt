window.addEventListener('load', function () {

    // Mapbox API access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVpbGdhbWIiLCJhIjoiY2o2cDV3cTlnMGN6MDMybndpam9wdmtldiJ9.PLcezh7shxb0_ppK3RGAdA';

    // Initiate Map and default values
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/light-v9', //hosted style id
        center: [-80.85, 35.22], // starting position
        zoom: 12, // starting zoom
        maxZoom: 18,
        minZoom: 12,
        pitch: 50
    });

    // Brewery GPS Coordinates & Markers

    //OMB
    const omb = [-80.881, 35.1872]

    const ombEl = document.createElement('div');
    ombEl.id = 'omb';

    new mapboxgl.Marker(ombEl, {offset:[-25, -25]})
    .setLngLat(omb)
    .addTo(map);


    // Sugar Creek
    const sc = [-80.880, 35.1853]

    const scEl = document.createElement('div');
    scEl.id = 'sc';

    new mapboxgl.Marker(scEl, {offset:[-25, -25]})
    .setLngLat(sc)
    .addTo(map);

})

