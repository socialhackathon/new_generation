var map
var marker
var userPos

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(42.8746212,74.56976170000007),
        zoom:15,
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

function trip() {
     directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
        origin: new google.maps.LatLng(42.842065, 74.607018), //точка старта
        destination: userPos, //точка финиша
        travelMode: google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
    };
var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
        console.log(status)
        if (status == google.maps.DirectionsStatus.OK) {

            directionsDisplay.setDirections(response);
        }
    });
    map.removeOverlay(marker);
    directionsDisplay.setMap(map);

}

function animate(route) { //функция анимирует каждый первый символ каждой полилинии
    var count = 0;
    icons = null;
    var lnght=route.length;
    offsetId = window.setInterval(function() {
        count = (count + 1) % 200;
       for(var i= 0; i < lnght; i++){
            icons = route[i].get('icons');
            icons[0].offset = (count / 2) + '%';
            route[i].set('icons', icons);
        }
    }, 40);
}

function showPosition(position) {
    userPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
     marker = new google.maps.Marker({
          position: userPos,
          map: map
        });
    map.setCenter(userPos);
}
