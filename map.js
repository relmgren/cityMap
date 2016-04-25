var map;
var peopleToggler = false;
var roadToggler = false;
var busToggler = false;


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
  if ( busToggler == false ) {
    document.getElementsByClassName('button')[2].style.backgroundColor = "black";
    busMarker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: 59.338, lng: 18.065},
      icon: 'bus.png'
    });
    busToggler = true;
  } else {
    busMarker.setMap(null);
    document.getElementsByClassName('button')[2].style.backgroundColor = "transparent";
    busToggler = false;
  }
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
