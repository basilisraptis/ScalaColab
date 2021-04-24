var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
                }).addTo(map);
    document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .className += ' fa fa-search';
    document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .title += 'Search for a place';
