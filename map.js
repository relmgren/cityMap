var map;
var peopleToggler = false;
var roadToggler = false;
var busToggler = false;
var sightsToggler = false;

var markers = [];
var busMarkers = [
  {lat: 59.330, lng: 18.064},
  {lat: 59.331, lng: 18.064},
  {lat: 59.332, lng: 18.064},
  {lat: 59.333, lng: 18.064},
  {lat: 59.334, lng: 18.064},
  {lat: 59.335, lng: 18.064},
  {lat: 59.336, lng: 18.064},
  {lat: 59.337, lng: 18.064},
  {lat: 59.338, lng: 18.063},
  {lat: 59.338, lng: 18.062},
  {lat: 59.338, lng: 18.061},
  {lat: 59.338, lng: 18.060},
  {lat: 59.338, lng: 18.059},
  {lat: 59.339, lng: 18.060}
];

var droppedSights = [];
var sightsMarkers = [
  {lat: 59.4, lng: 18.061},
  {lat: 59.388, lng: 18.025},
  {lat: 59.348, lng: 18.0345},
  {lat: 59.328, lng: 18.0654},
  {lat: 59.378, lng: 18.0648},
  {lat: 59.328, lng: 18.0684},
  {lat: 59.378, lng: 18.0345},
  {lat: 59.388, lng: 18.0214},
  {lat: 59.3398, lng: 18.079},
  {lat: 59.333, lng: 18.093},
  {lat: 59.3385, lng: 18.02645},
  {lat: 59.334, lng: 18.0752},
  {lat: 59.3334, lng: 18.0247},
  {lat: 59.3744, lng: 18.072453},
  {lat: 59.3435, lng: 18.0723456}
]



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

  currentLocationMarker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.349, lng: 18.070},
    icon: 'current-location.png'
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
    addMarkerWithTimeout(busMarkers[i], i * 200, i);
  }
}

function sightsToggle() {
  if ( sightsToggler == false ) {
    document.getElementsByClassName('button')[3].style.backgroundColor = "black";
    for( var i = 0; i < sightsMarkers.length; i++) {
      droppedSights.push(new google.maps.Marker({
        map: map,
        draggable: false,
        position: sightsMarkers[i],
        icon: {url: 'world-heritage.png',
              scaledSize: new google.maps.Size(22,22)}
      }));
    }

    sightsToggler = true;
  } else {
    for (index in droppedSights) {
      droppedSights[index].setMap(null);
    }
    document.getElementsByClassName('button')[3].style.backgroundColor = "transparent";
    sightsToggler = false;
  }
}

function addMarkerWithTimeout(position, timeout, index) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      icon: 'bus.png'
    }));

  if (index > 0) {
    markers[index - 1].setMap(null);
  }
  if (index == 13) {
    markers[index].setMap(null);
  }
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
