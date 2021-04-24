var map = L.map('map', {
    zoomControl: false,
    center:  [51.505, -0.09],
    zoom: 10})
    
    
    var noise_group = new L.featureGroup([]);
        map.createPane('pane_sc_noise_4_0');
        map.getPane('pane_sc_noise_4_0').style.zIndex = 400;
        var img_sc_noise_4_0 = 'https://github.com/basilisraptis/ScalaColab/blob/d5d9b3097ffc5c3894b2e4fd4306878ea15f79bd/data/sc_noise_4_0.png';
        var img_bounds_sc_noise_4_0 = [[54.56579448253024,-5.411641389683964],[56.240592153912736,-1.3700523896600811]];
        var layer_sc_noise_4_0 = new L.imageOverlay(img_sc_noise_4_0,
                                              img_bounds_sc_noise_4_0,
                                              {pane: 'pane_sc_noise_4_0'});
        bounds_group.addLayer(layer_sc_noise_4_0);
        map.addLayer(layer_sc_noise_4_0);
        map.createPane('pane_sc_noise_3_1');
        map.getPane('pane_sc_noise_3_1').style.zIndex = 401;
        var img_sc_noise_3_1 = 'https://github.com/basilisraptis/ScalaColab/blob/d5d9b3097ffc5c3894b2e4fd4306878ea15f79bd/data/sc_noise_3_1.png';
        var img_bounds_sc_noise_3_1 = [[55.20042256887151,-6.845532022365005],[57.842274414032545,-1.587905138613023]];
        var layer_sc_noise_3_1 = new L.imageOverlay(img_sc_noise_3_1,
                                              img_bounds_sc_noise_3_1,
                                              {pane: 'pane_sc_noise_3_1'});
        bounds_group.addLayer(layer_sc_noise_3_1);
        map.addLayer(layer_sc_noise_3_1);
        map.createPane('pane_sc_noise_2_2');
        map.getPane('pane_sc_noise_2_2').style.zIndex = 402;
        var img_sc_noise_2_2 = 'https://github.com/basilisraptis/ScalaColab/blob/d5d9b3097ffc5c3894b2e4fd4306878ea15f79bd/data/sc_noise_2_2.png';
        var img_bounds_sc_noise_2_2 = [[56.132485827602295,-8.133852949857406],[58.70551267467658,-2.7370025827083166]];
        var layer_sc_noise_2_2 = new L.imageOverlay(img_sc_noise_2_2,
                                              img_bounds_sc_noise_2_2,
                                              {pane: 'pane_sc_noise_2_2'});
        bounds_group.addLayer(layer_sc_noise_2_2);
        map.addLayer(layer_sc_noise_2_2);
        map.createPane('pane_sc_noise_1_3');
        map.getPane('pane_sc_noise_1_3').style.zIndex = 403;
        var img_sc_noise_1_3 = 'https://github.com/basilisraptis/ScalaColab/blob/d5d9b3097ffc5c3894b2e4fd4306878ea15f79bd/data/sc_noise_1_3.png';
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