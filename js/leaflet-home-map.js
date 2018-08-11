jQuery(document).ready(function($) {

  //basic variables
  var mapName = 'map-home';
  var mapCenter = [47.050168, 8.309307];
  var mapZoom = 14;
  var mapMinZoom = 14;
  var mapMaxZoom = 14;
  var drawMapInColor = false;
  var enableDragging = false;
  var enableScrollWheelZoom = false;
  var enableZoomControl = false;

  //map
  var url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  var attrib = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
  var map = L.map(mapName,{dragging: enableDragging, scrollWheelZoom:enableScrollWheelZoom, zoomControl:enableZoomControl}).setView(mapCenter, mapZoom);

  if(drawMapInColor){
    L.tileLayer(url,{
      minZoom: mapMinZoom,
      maxZoom: mapMaxZoom,
      scrollWheelZoom: enableScrollWheelZoom,
      attribution: attrib,
      id: 'mapbox.streets'
    }).addTo(map);

  } else{
    L.tileLayer(url, {
        minZoom: mapMinZoom,
        maxZoom: mapMaxZoom,
        attribution: attrib,
        id: 'mapbox.light' //mapbox.dark
      }).addTo(map);
  }

  //custom marker
  var temperAndFinicky = L.Icon.extend({
    options: {
      iconUrl: 'img/characters/temper_and_finicky_standing.png',
      iconSize:     [106, 144],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [52, -95]
    }
  });
  var temperAndFinickyInst = new temperAndFinicky();
  L.marker(mapCenter, {icon: temperAndFinickyInst}).bindPopup("Hi there!").addTo(map);

});
