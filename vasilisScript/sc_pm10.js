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
        
bounds_group.addLayer(pm10_group);