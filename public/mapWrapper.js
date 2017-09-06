var MapWrapper = function (container, coords, zoom) {
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom
    });
    this.markers = [];
}

MapWrapper.prototype = {
    addMarker: function (coords, title, contentString) {

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: coords,
            map: this.googleMap,
            title: title,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);

        marker.addListener('click', function () {
            infowindow.open(this.goggleMap, marker);
        });
    },

    infoWindow: function (contentString) {
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
    },

    addClickEvent: function () {
        google.maps.event.addListener(this.googleMap, 'click', function (event) {
            console.log(event);
            console.log(event.latLng.lat());
        });
    },

    addClickEvent: function () {
        google.maps.event.addListener(this.googleMap, 'click', function (event) {
            var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }
            this.addMarker(position);
        }.bind(this));
    },

    bounceMarkers: function () {
        this.markers.forEach(function (marker) {
            marker.setAnimation(google.maps.Animation.BOUNCE)
        })
    },

    takeMeThereFun: function (coords) {
        var container = document.getElementById('main-map');
        this.googleMap = new google.maps.Map(container, {
            center: { lat: 47.6695253, lng: 17.5886452 },
            zoom: 11
        });
    },

    myPos: function () {
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);
        navigator.geolocation.getCurrentPosition(function (position) {

            var geolocate = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content:'<h2>I find you Dude!</h2>'
            });

            map.setCenter(geolocate);

        });
    },
    //cc solution
    // addInfoWindow: function(coords, text){
    //     var marker = this.addMarker(coords);
    //     marker.addClickEvent('click', function(){
    //         var infoWindow = new google.maps.infoWindow({
    //             content: text
    //         });
    //         infoWindow.open(this.map, marker);
    //     })
    // }
    //end of cc sol


}

