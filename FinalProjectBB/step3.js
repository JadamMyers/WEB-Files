

let map;

var city;
var latitude;
var longitude;


function initMap() {
    city = cities[Math.floor(Math.random() * cities.length)];
    document.getElementById('location').innerHTML = city.name;

    latitude = city.lat;
    longitude = city.lon;

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: parseInt(latitude)+.69, lng: parseInt(longitude) },
      zoom: 6.5,
    });
}


var retrievedObject;

var p_name;
var d_date;
var n_days;
var reqs;
var d_city;

window.addEventListener('load', () => {
    retrievedObject = sessionStorage.getItem("travel_info");

    const obj = JSON.parse(retrievedObject);

    p_name = obj.p_name;
    d_date = obj.d_date;
    n_days = obj.n_days;
    reqs = obj.reqs;
    d_city = obj.d_city;


})

function fillPassport() {
    document.getElementById('passenger').innerHTML = p_name;
    document.getElementById('departure').innerHTML = d_date;
    document.getElementById('days').innerHTML = n_days;
    document.getElementById('city').innerHTML = d_city;
}


