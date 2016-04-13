var map;
var peopleToggler = false;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {lat: 59.3293, lng: 18.0686},
        zoom: 14,
        disableDefaultUI: true
    });
}

function peopleToggle() {
    if ( peopleToggler == false ) {
        document.getElementsByClassName('button')[0].style.backgroundColor = "black";
        peopleMarker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: {lat: 59.3293, lng: 18.067}
        });
        peopleMarker.addListener('click', toggleBounce);
        peopleToggler = true;
    } else {
        peopleMarker.setMap(null);
        peopleToggler = false;
    }

}

function toggleBounce() {
    if (peopleMarker.getAnimation() != null) {
        peopleMarker.setAnimation(null);
    } else {
        peopleMarker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
