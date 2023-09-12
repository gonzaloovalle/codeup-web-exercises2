mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

//Set up map for San Antonio
geocode("McAllister Park, San Antonio, TX", MAPBOX_API_TOKEN).then(function(result) {
    map.setCenter(result);
    map.setZoom(11);
});

// geocode("700 E Sonterra, San Antonio, TX", MAPBOX_API_TOKEN).then(function(result) {
//     let marker = new mapboxgl.Marker().setLngLat(result).addTo(map);
//     let popup = new mapboxgl.Popup().setHTML("<p>Smashin Crab</p>");
//     marker.setPopup(popup);
// });
//
// geocode("15909 San Pedro Ave Suite 115, Hollywood Park, TX 78232", MAPBOX_API_TOKEN).then(function(result) {
//     let marker = new mapboxgl.Marker().setLngLat(result).addTo(map);
//     let popup = new mapboxgl.Popup().setHTML("<p>Purple Garlic</p>");
//     marker.setPopup(popup);
// });
//
// geocode("8305 Broadway, San Antonio, TX 78209", MAPBOX_API_TOKEN).then(function(result) {
//     let marker = new mapboxgl.Marker().setLngLat(result).addTo(map);
//     let popup = new mapboxgl.Popup().setHTML("<p>La Panaderia</p>");
//     marker.setPopup(popup);
// });

let restaurants = [
    {
        address: "700 E Sonterra, San Antonio, TX",
        popupHTML: "<p>Smashin Crab</p> <img class='restaurant-image' src='img/smashin_crab.jpeg'>"
    },
    {
        address: "15909 San Pedro Ave Suite 115, Hollywood Park, TX 78232",
        popupHTML: "<p>Purple Garlic</p> <img class='restaurant-image' src='img/purple_garlic.jpeg'>"

    },
    {
        address: "8305 Broadway, San Antonio, TX 78209",
        popupHTML: "<p>La Panaderia</p> <img class='restaurant-image' src='img/la_panaderia.jpeg'>"
    }
]

function animateMarker(timestamp, marker, start, originalPosition) {
    const frequency = 0.01;
    const amplitude = 0.01;
    const y = Math.sin((timestamp - start) * frequency) * amplitude;

    const position = marker.getLngLat();
    marker.setLngLat([position.lng, position.lat + y]);

    if (timestamp - start < 2000) {
        requestAnimationFrame((newTimestamp) => animateMarker(newTimestamp, marker, start, originalPosition));
    } else {
        // After 2 seconds, set the marker back to its original position
        marker.setLngLat(originalPosition);
    }
}



restaurants.forEach((restaurant) => {
    geocode(restaurant.address, MAPBOX_API_TOKEN).then((result) => {
        let marker = new mapboxgl.Marker().setLngLat(result).addTo(map);
        let popup = new mapboxgl.Popup().setHTML(restaurant.popupHTML);
        marker.setPopup(popup);

        const originalPosition = result;

        const start = performance.now();
        requestAnimationFrame((timestamp) => animateMarker(timestamp, marker, start, originalPosition));    });
});

let zoomSelect = document.querySelector("#map_zoom");

zoomSelect.addEventListener("change", () => {
    map.setZoom(zoomSelect.value);
});

let search = document.querySelector("#search");

search.addEventListener("keypress", () => {
    console.log(search.value);
    geocode(search.value, MAPBOX_API_TOKEN).then((result) => {
        map.setCenter(result);
    });
});

let btn = document.querySelector("#hide_markers");

btn.addEventListener("click", () => {
    let markers = document.getElementsByClassName("mapboxgl-marker");
    for (let marker of markers) {
        console.log(marker);
        marker.classList.toggle("invisible")
    }
    if (btn.innerHTML === "Hide") {
        btn.innerHTML = "Show"
    } else if (btn.innerHTML === "Show") {
        btn.innerHTML = "Hide"
    }
});


