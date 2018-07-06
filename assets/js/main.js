function initGoogleMap() {
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: new google.maps.LatLng(-33.40066, -71.13308),
    // zoomControl: false,
    panControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-33.40066, -71.13308),
    map: map,
    icon: 'assets/img/icon-location.svg'
  });
}
