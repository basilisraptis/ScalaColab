var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[48.27635353973537,-16.259585526678467],[57.71826507150012,12.712445684589365]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {}


// NOISE




var noise_group = new L.featureGroup([]);
map.createPane('pane_sc_noise_4_0');
map.getPane('pane_sc_noise_4_0').style.zIndex = 400;
var img_sc_noise_4_0 = 'data/sc_noise_4_0.png';
var img_bounds_sc_noise_4_0 = [[54.56579448253024,-5.411641389683964],[56.240592153912736,-1.3700523896600811]];
var layer_sc_noise_4_0 = new L.imageOverlay(img_sc_noise_4_0,
                                      img_bounds_sc_noise_4_0,
                                      {pane: 'pane_sc_noise_4_0'});
bounds_group.addLayer(layer_sc_noise_4_0);
map.addLayer(layer_sc_noise_4_0);
map.createPane('pane_sc_noise_3_1');
map.getPane('pane_sc_noise_3_1').style.zIndex = 401;
var img_sc_noise_3_1 = 'data/sc_noise_3_1.png';
var img_bounds_sc_noise_3_1 = [[55.20042256887151,-6.845532022365005],[57.842274414032545,-1.587905138613023]];
var layer_sc_noise_3_1 = new L.imageOverlay(img_sc_noise_3_1,
                                      img_bounds_sc_noise_3_1,
                                      {pane: 'pane_sc_noise_3_1'});
bounds_group.addLayer(layer_sc_noise_3_1);
map.addLayer(layer_sc_noise_3_1);
map.createPane('pane_sc_noise_2_2');
map.getPane('pane_sc_noise_2_2').style.zIndex = 402;
var img_sc_noise_2_2 = 'data/sc_noise_2_2.png';
var img_bounds_sc_noise_2_2 = [[56.132485827602295,-8.133852949857406],[58.70551267467658,-2.7370025827083166]];
var layer_sc_noise_2_2 = new L.imageOverlay(img_sc_noise_2_2,
                                      img_bounds_sc_noise_2_2,
                                      {pane: 'pane_sc_noise_2_2'});
bounds_group.addLayer(layer_sc_noise_2_2);
map.addLayer(layer_sc_noise_2_2);
map.createPane('pane_sc_noise_1_3');
map.getPane('pane_sc_noise_1_3').style.zIndex = 403;
var img_sc_noise_1_3 = 'data/sc_noise_1_3.png';
var img_bounds_sc_noise_1_3 = [[58.6436054080566,-3.5639261046152666],[60.966931194953844,-0.4624712431430314]];
var layer_sc_noise_1_3 = new L.imageOverlay(img_sc_noise_1_3,
                                      img_bounds_sc_noise_1_3,
                                      {pane: 'pane_sc_noise_1_3'});
bounds_group.addLayer(layer_sc_noise_1_3);
map.addLayer(layer_sc_noise_1_3);
setBounds();
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});

bounds_group.addLayer(noise_group);








// NO2



var no2_group = new L.featureGroup([]);
map.createPane('pane_sc_no2_4_0');
map.getPane('pane_sc_no2_4_0').style.zIndex = 400;
var img_sc_no2_4_0 = 'data/sc_no2_4_0.png';
var img_bounds_sc_no2_4_0 = [[54.565779777381564,-5.411741364687382],[56.24058002412997,-1.3701539296539977]];
var layer_sc_no2_4_0 = new L.imageOverlay(img_sc_no2_4_0,
                                      img_bounds_sc_no2_4_0,
                                      {pane: 'pane_sc_no2_4_0'});
bounds_group.addLayer(layer_sc_no2_4_0);
map.addLayer(layer_sc_no2_4_0);
map.createPane('pane_sc_no2_3_1');
map.getPane('pane_sc_no2_3_1').style.zIndex = 401;
var img_sc_no2_3_1 = 'data/sc_no2_3_1.png';
var img_bounds_sc_no2_3_1 = [[55.20040684898399,-6.845635567370293],[57.84226226691833,-1.5880110819219218]];
var layer_sc_no2_3_1 = new L.imageOverlay(img_sc_no2_3_1,
                                      img_bounds_sc_no2_3_1,
                                      {pane: 'pane_sc_no2_3_1'});
bounds_group.addLayer(layer_sc_no2_3_1);
map.addLayer(layer_sc_no2_3_1);
map.createPane('pane_sc_no2_2_2');
map.getPane('pane_sc_no2_2_2').style.zIndex = 402;
var img_sc_no2_2_2 = 'data/sc_no2_2_2.png';
var img_bounds_sc_no2_2_2 = [[56.13246910672815,-8.13395819073731],[58.70549992259696,-2.7371037523882906]];
var layer_sc_no2_2_2 = new L.imageOverlay(img_sc_no2_2_2,
                                      img_bounds_sc_no2_2_2,
                                      {pane: 'pane_sc_no2_2_2'});
bounds_group.addLayer(layer_sc_no2_2_2);
map.addLayer(layer_sc_no2_2_2);
map.createPane('pane_sc_no2_1_3');
map.getPane('pane_sc_no2_1_3').style.zIndex = 403;
var img_sc_no2_1_3 = 'data/sc_no2_1_3.png';
var img_bounds_sc_no2_1_3 = [[58.64359600218226,-3.5636723146828193],[60.966919088404346,-0.4625877775025636]];
var layer_sc_no2_1_3 = new L.imageOverlay(img_sc_no2_1_3,
                                      img_bounds_sc_no2_1_3,
                                      {pane: 'pane_sc_no2_1_3'});
bounds_group.addLayer(layer_sc_no2_1_3);
map.addLayer(layer_sc_no2_1_3);
setBounds();
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});

bounds_group.addLayer(no2_group);


















//  PM10



var pm10_group = new L.featureGroup([]);
map.createPane('pane_sc_pm10_4_0');
map.getPane('pane_sc_pm10_4_0').style.zIndex = 400;
var img_sc_pm10_4_0 = 'data/sc_pm10_4_0.png';
var img_bounds_sc_pm10_4_0 = [[54.565779777381564,-5.411741364687382],[56.24058002412997,-1.3701539296539977]];
var layer_sc_pm10_4_0 = new L.imageOverlay(img_sc_pm10_4_0,
                                      img_bounds_sc_pm10_4_0,
                                      {pane: 'pane_sc_pm10_4_0'});
bounds_group.addLayer(layer_sc_pm10_4_0);
map.addLayer(layer_sc_pm10_4_0);
map.createPane('pane_sc_pm10_3_1');
map.getPane('pane_sc_pm10_3_1').style.zIndex = 401;
var img_sc_pm10_3_1 = 'data/sc_pm10_3_1.png';
var img_bounds_sc_pm10_3_1 = [[55.20040684898399,-6.845635567370293],[57.84226226691833,-1.5880110819219218]];
var layer_sc_pm10_3_1 = new L.imageOverlay(img_sc_pm10_3_1,
                                      img_bounds_sc_pm10_3_1,
                                      {pane: 'pane_sc_pm10_3_1'});
bounds_group.addLayer(layer_sc_pm10_3_1);
map.addLayer(layer_sc_pm10_3_1);
map.createPane('pane_sc_pm10_2_2');
map.getPane('pane_sc_pm10_2_2').style.zIndex = 402;
var img_sc_pm10_2_2 = 'data/sc_pm10_2_2.png';
var img_bounds_sc_pm10_2_2 = [[56.13246910672815,-8.13395819073731],[58.70549992259696,-2.7371037523882906]];
var layer_sc_pm10_2_2 = new L.imageOverlay(img_sc_pm10_2_2,
                                      img_bounds_sc_pm10_2_2,
                                      {pane: 'pane_sc_pm10_2_2'});
bounds_group.addLayer(layer_sc_pm10_2_2);
map.addLayer(layer_sc_pm10_2_2);
map.createPane('pane_sc_pm10_1_3');
map.getPane('pane_sc_pm10_1_3').style.zIndex = 403;
var img_sc_pm10_1_3 = 'data/sc_pm10_1_3.png';
var img_bounds_sc_pm10_1_3 = [[58.64359600218226,-3.5636723146828193],[60.966919088404346,-0.4625877775025636]];
var layer_sc_pm10_1_3 = new L.imageOverlay(img_sc_pm10_1_3,
                                      img_bounds_sc_pm10_1_3,
                                      {pane: 'pane_sc_pm10_1_3'});
bounds_group.addLayer(layer_sc_pm10_1_3);
map.addLayer(layer_sc_pm10_1_3);
setBounds();
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});

bounds_group.addLayer(pm10_group);



























var pm25_group = new L.featureGroup([]);
map.createPane('pane_sc_pm25_4_0');
map.getPane('pane_sc_pm25_4_0').style.zIndex = 400;
var img_sc_pm25_4_0 = 'data/sc_pm25_4_0.png';
var img_bounds_sc_pm25_4_0 = [[54.565779777381564,-5.411741364687382],[56.24058002412997,-1.3701539296539977]];
var layer_sc_pm25_4_0 = new L.imageOverlay(img_sc_pm25_4_0,
                                      img_bounds_sc_pm25_4_0,
                                      {pane: 'pane_sc_pm25_4_0'});
bounds_group.addLayer(layer_sc_pm25_4_0);
map.addLayer(layer_sc_pm25_4_0);


map.createPane('pane_sc_pm25_3_1');
map.getPane('pane_sc_pm25_3_1').style.zIndex = 401;
var img_sc_pm25_3_1 = 'data/sc_pm25_3_1.png';
var img_bounds_sc_pm25_3_1 = [[55.20040684898399,-6.845635567370293],[57.84226226691833,-1.5880110819219218]];
var layer_sc_pm25_3_1 = new L.imageOverlay(img_sc_pm25_3_1,
                                      img_bounds_sc_pm25_3_1,
                                      {pane: 'pane_sc_pm25_3_1'});
bounds_group.addLayer(layer_sc_pm25_3_1);
map.addLayer(layer_sc_pm25_3_1);


map.createPane('pane_sc_pm25_2_2');
map.getPane('pane_sc_pm25_2_2').style.zIndex = 402;
var img_sc_pm25_2_2 = 'data/sc_pm25_2_2.png';
var img_bounds_sc_pm25_2_2 = [[56.13246910672815,-8.13395819073731],[58.70549992259696,-2.7371037523882906]];
var layer_sc_pm25_2_2 = new L.imageOverlay(img_sc_pm25_2_2,
                                      img_bounds_sc_pm25_2_2,
                                      {pane: 'pane_sc_pm25_2_2'});
bounds_group.addLayer(layer_sc_pm25_2_2);
map.addLayer(layer_sc_pm25_2_2);


map.createPane('pane_sc_pm25_1_3');
map.getPane('pane_sc_pm25_1_3').style.zIndex = 403;
var img_sc_pm25_1_3 = 'data/sc_pm25_1_3.png';
var img_bounds_sc_pm25_1_3 = [[58.64359600218226,-3.5636723146828193],[60.966919088404346,-0.4625877775025636]];
var layer_sc_pm25_1_3 = new L.imageOverlay(img_sc_pm25_1_3,
                                      img_bounds_sc_pm25_1_3,
                                      {pane: 'pane_sc_pm25_1_3'});
bounds_group.addLayer(layer_sc_pm25_1_3);
map.addLayer(layer_sc_pm25_1_3);

bounds_group.addLayer(pm25_group);




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
    attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ??2015 Google</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_GoogleSatellite_55;
//map.addLayer(layer_GoogleSatellite_55);



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





var baseLayers = {
"Basemap Grey": layer_Positron_54,
"Basemap Satellite": layer_GoogleSatellite_55
};

var overLayers = {
"Air - PM2.5": pm25_group,
"Air - PM10": pm10_group,
"Air - NO2": no2_group,
"Flood": floods_group,
"Noise": noise_group
};

//just adding layer controler on map 
//var allLayers = L.control.layers(, overLayers).addTo(map);
var allLayers = L.control.layers(baseLayers, overLayers, {collapsed:false}).addTo(map);
//layer_Positron_54.addTo(map);
bounds_group.addTo(map);