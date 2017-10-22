var map
var marker
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(42.8746212,74.56976170000007),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    getLocation()
}
var asa=document.getElementById("asa");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {

    }
}
function showPosition(position) {
     marker = new google.maps.Marker({
          position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: map
        });
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
}
