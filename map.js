var map;
var peopleToggler = false;
var roadToggler = false;
var busToggler = false;

var markers = [];
var busMarkers = [
  {lat: 59.338, lng: 18.065},
  {lat: 59.339, lng: 18.065},
  {lat: 59.340, lng: 18.065},
  {lat: 59.341, lng: 18.065},
  {lat: 59.342, lng: 18.065},
  {lat: 59.343, lng: 18.065},
  {lat: 59.344, lng: 18.065},
  {lat: 59.345, lng: 18.065},
  {lat: 59.345, lng: 18.064},
  {lat: 59.345, lng: 18.063},
  {lat: 59.345, lng: 18.062},
  {lat: 59.345, lng: 18.061},
  {lat: 59.345, lng: 18.060},
  {lat: 59.346, lng: 18.061}
];



function initMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: {lat: 59.3293, lng: 18.0686},
    zoom: 14,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false,
    navigationControl: false,
    scaleControl: false
  });
}

function peopleToggle() {
  if ( peopleToggler == false ) {
    document.getElementsByClassName('button')[0].style.backgroundColor = "black";
    peopleMarker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: 59.3293, lng: 18.067},
      icon: 'heatmap.png'
    });
    peopleMarker.addListener('click', toggleInfo());
    peopleToggler = true;
  } else {
    peopleMarker.setMap(null);
    document.getElementsByClassName('button')[0].style.backgroundColor = "transparent";
    peopleToggler = false;
  }
}

function roadToggle() {
  if ( roadToggler == false ) {
    document.getElementsByClassName('button')[1].style.backgroundColor = "black";
    roadMarker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: 59.338, lng: 18.065},
      icon: 'red-line.png'
    });
    roadToggler = true;
  } else {
    roadMarker.setMap(null);
    document.getElementsByClassName('button')[1].style.backgroundColor = "transparent";
    roadToggler = false;
  }
}

function busToggle() {
  clearMarkers();
  for (var i = 0; i < busMarkers.length; i++) {
    addMarkerWithTimeout(busMarkers[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function toggleInfo() {
  if (peopleMarker.getAnimation() != null) {
    peopleMarker.setAnimation(null);
    document.getElementById('information-click').style.display = 'none';
  } else {
    peopleMarker.setAnimation(google.maps.Animation.BOUNCE);
    document.getElementById('information-click').style.display = 'block';
  }
}
