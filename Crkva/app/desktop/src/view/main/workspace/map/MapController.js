Ext.define('Crkva.view.main.workspace.map.MapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.map',

    init: function () {
        this.initializeMap();
    },

    initializeMap: function () {
        let me = this,
            vm = me.getViewModel(),
            mapView = new ol.View({
                center: [2279657.931577, 5592744.485570],
                zoom: 7,
                maxZoom: 20,
                minZoom: 6,
            }),
            layers = [],
            backgroundLayer = me.createBackgroundLayer();


        layers.push(backgroundLayer);

        const map = new ol.Map({
            interactions: ol.interaction.defaults(),
            pixelRatio: 1,
            layers: layers,
            view: mapView,
            logo: false,
            controls: [
                new ol.control.Zoom(),
                new ol.control.Rotate(),
                new ol.control.ScaleLine()
            ]
        }),
            mapComponent = me.getView().down();
        //debugger;
        mapComponent.setMap(map);
        vm.set('map', map);
        //me.createMapClickEvent(map);
    },

    createBackgroundLayer: function () {
        var openStreetMapLayer = new ol.layer.Tile({
            source: new ol.source.OSM(),
        });
        openStreetMapLayer.set('name', 'Mapa');
        return openStreetMapLayer;
    },
});