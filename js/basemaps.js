map.createPane('pane_Positron_54');
        map.getPane('pane_Positron_54').style.zIndex = 454;
        var layer_Positron_54 = L.tileLayer('http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            pane: 'pane_Positron_54',
            opacity: 1.0,
            attribution: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
                });
        layer_Positron_54;
                //map.addLayer(layer_Positron_54);



        map.createPane('pane_GoogleSatellite_55');
        map.getPane('pane_GoogleSatellite_55').style.zIndex = 455;
        var layer_GoogleSatellite_55 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleSatellite_55',
            opacity: 1.0,
            attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
                });
        layer_GoogleSatellite_55;
        //map.addLayer(layer_GoogleSatellite_55);