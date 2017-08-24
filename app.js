window.addEventListener('load', function () {

    // Mapbox API access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVpbGdhbWIiLCJhIjoiY2o2cDV3cTlnMGN6MDMybndpam9wdmtldiJ9.PLcezh7shxb0_ppK3RGAdA';

    // Initiate Map and default values
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/light-v9', //hosted style id
        center: [-80.8700, 35.2070], // starting position
        zoom: 11, // starting zoom
        maxZoom: 18,
        minZoom: 11,
        pitch: 0,
        bearing: 30,
    });

    zoom();

    function zoom() {
        setTimeout(function () {

            map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: [-80.8700, 35.2070],
                zoom: 13,
                pitch: 50,
                bearing: 0,

                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out

                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.
                easing: function (t) {
                    return t;
                }
            });

        }, 2000);
    }

    // Brewery GPS Coordinates & Markers

    //OMB
    const omb = [-80.881, 35.1872]

    const ombEl = document.createElement('div');
    ombEl.classList.add('marker')
    ombEl.id = 'ombMark';

    new mapboxgl.Marker(ombEl, { offset: [-25, -25] })
        .setLngLat(omb)
        .addTo(map);

    // Sugar Creek
    const sc = [-80.880, 35.1853]

    const scEl = document.createElement('div');
    scEl.classList.add('marker')
    scEl.id = 'scMark';

    new mapboxgl.Marker(scEl, { offset: [-25, -25] })
        .setLngLat(sc)
        .addTo(map);

    // Triple C
    const ccc = [-80.8695, 35.2010]

    const cccEl = document.createElement('div');
    cccEl.classList.add('marker')
    cccEl.id = 'cccMark';

    new mapboxgl.Marker(cccEl, { offset: [-25, -25] })
        .setLngLat(ccc)
        .addTo(map);

    // Triple C
    const lenny = [-80.8735, 35.2013]

    const lennyEl = document.createElement('div');
    lennyEl.classList.add('marker')
    lennyEl.id = 'lennyMark';

    new mapboxgl.Marker(lennyEl, { offset: [-25, -25] })
        .setLngLat(lenny)
        .addTo(map);

    // Sycamore
    const syc = [-80.862762, 35.208713]

    const sycEl = document.createElement('div');
    sycEl.classList.add('marker')
    sycEl.id = 'sycMark';

    new mapboxgl.Marker(sycEl, { offset: [-25, -25] })
        .setLngLat(syc)
        .addTo(map);

    // Wooden Robot
    const wb = [-80.857001, 35.216899]

    const wbEl = document.createElement('div');
    wbEl.classList.add('marker')
    wbEl.id = 'wbMark';

    new mapboxgl.Marker(wbEl, { offset: [-25, -25] })
        .setLngLat(wb)
        .addTo(map);

    // Unknown
    const unk = [-80.857522, 35.220503]

    const unkEl = document.createElement('div');
    unkEl.classList.add('marker')
    unkEl.id = 'unkMark';

    new mapboxgl.Marker(unkEl, { offset: [-25, -25] })
        .setLngLat(unk)
        .addTo(map);

    // Legion
    const leg = [-80.812991, 35.218373]

    const legEl = document.createElement('div');
    legEl.classList.add('marker')
    legEl.id = 'legMark';

    new mapboxgl.Marker(legEl, { offset: [-25, -25] })
        .setLngLat(leg)
        .addTo(map);

    // Birdsong
    const bird = [-80.826533, 35.230651]

    const birdEl = document.createElement('div');
    birdEl.classList.add('marker')
    birdEl.id = 'birdMark';

    new mapboxgl.Marker(birdEl, { offset: [-25, -25] })
        .setLngLat(bird)
        .addTo(map);

    // NoDa
    const noda = [-80.812471, 35.251562]

    const nodaEl = document.createElement('div');
    nodaEl.classList.add('marker')
    nodaEl.id = 'nodaMark';

    new mapboxgl.Marker(nodaEl, { offset: [-25, -25] })
        .setLngLat(noda)
        .addTo(map);

    // Free Range
    const fr = [-80.813282, 35.240505]

    const frEl = document.createElement('div');
    frEl.classList.add('marker')
    frEl.id = 'frMark';

    new mapboxgl.Marker(frEl, { offset: [-25, -25] })
        .setLngLat(fr)
        .addTo(map);

    // Thirsty Nomad
    const tn = [-80.889842, 35.188583]

    const tnEl = document.createElement('div');
    tnEl.classList.add('marker')
    tnEl.id = 'tnMark';

    new mapboxgl.Marker(tnEl, { offset: [-25, -25] })
        .setLngLat(tn)
        .addTo(map);

    // Blue Blaze
    const blubl = [-80.867545, 35.240870]

    const blublEl = document.createElement('div');
    blublEl.classList.add('marker')
    blublEl.id = 'blublMark';

    new mapboxgl.Marker(blublEl, { offset: [-25, -25] })
        .setLngLat(blubl)
        .addTo(map);

    // Heist
    const heist = [-80.809440, 35.245478]

    const heistEl = document.createElement('div');
    heistEl.classList.add('marker')
    heistEl.id = 'heistMark';

    new mapboxgl.Marker(heistEl, { offset: [-25, -25] })
        .setLngLat(heist)
        .addTo(map);

    // Resident Culture
    const rescul = [-80.805504, 35.220206]

    const resculEl = document.createElement('div');
    resculEl.classList.add('marker')
    resculEl.id = 'resculMark';

    new mapboxgl.Marker(resculEl, { offset: [-25, -25] })
        .setLngLat(rescul)
        .addTo(map);

    // Salud
    const salud = [-80.804100, 35.247787]

    const saludEl = document.createElement('div');
    saludEl.classList.add('marker')
    saludEl.id = 'saludMark';

    new mapboxgl.Marker(saludEl, { offset: [-25, -25] })
        .setLngLat(salud)
        .addTo(map);


    let breweries = document.getElementsByTagName('li');

    for (let i = 0; i < breweries.length; i++) {
        breweries[i].addEventListener('click', function () {

            map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: eval(this.id),
                zoom: 16,
                bearing: 0,

                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.7, // make the flying slow
                curve: 1, // change the speed at which it zooms out

                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.
                easing: function (t) {
                    return t;
                }
            });
        })
    }
})

function makeBig(x) {

    let id = x.id + "Mark"
    document.getElementById(id).style.height = "150px";
    document.getElementById(id).style.width = "150px";
    // document.getElementById(id).style.transition = "1s"
}

function makeNorm(x) {

    let id = x.id + "Mark"
    document.getElementById(id).style.height = "30px";
    document.getElementById(id).style.width = "30px";
    document.getElementById(id).style.transition = "none"

}

function openDetail(x) {
    let id = x.id + "Detail";
    let details = document.getElementsByClassName('detail');

    for (let i = 0; i < details.length; i++) {
        details[i].classList.remove('active');
    }

    document.getElementById(id).classList.add('active');

}
