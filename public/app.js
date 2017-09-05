var initialize = function () {
    var center = { lat: 51.507351, lng: -0.127758 };
    var mapDiv = document.getElementById('main-map');
    var mainMap = new MapWrapper(mapDiv, center, 10);
    var contentString = "pub";
    var bounceButton = document.querySelector('#button-bounce-markers')
    bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

    mainMap.addMarker(center);
    mainMap.addMarker({ lat: 51.47732, lng: -0.2873764 },
        "Tap on the Line",
        contentString);

     //   { lat: 47.6695253, lng: 17.5886452 }
    
    var gyor = { lat: 47.6695253, lng: 17.5886452 }

    var takeMeThere = document.querySelector('#recenter')
    takeMeThere.addEventListener('click', mainMap.takeMeThereFun )


    mainMap.addClickEvent();

   

}

window.addEventListener('load', initialize);