var initialize = function () {
    var center = { lat: 51.507351, lng: -0.127758 };
    var mapDiv = document.getElementById('main-map');
    var mainMap = new MapWrapper(mapDiv, center, 10); 

    var bounceButton = document.querySelector('#button-bounce-markers')
    bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))
    
    mainMap.addMarker(center);
    
    mainMap.addMarker({ lat: 51.47732, lng: -0.2873764 });
    mainMap.addClickEvent();

    
}

window.addEventListener('load', initialize);