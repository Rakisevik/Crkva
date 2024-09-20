Ext.define('Crkva.view.main.workspace.map.Map', {
    extend: 'Ext.panel.Panel',
    xtype: 'map',

    requires: [
        'Crkva.view.main.workspace.map.MapModel',
        'Crkva.view.main.workspace.map.MapController',
        'Ext.layout.container.Absolute',
        'GeoExt.component.Map'
    ],

    controller: 'map',
    viewModel: {
        type: 'map'
    },

    layout: {
        type: 'absolute'
    },

    items: [],

    initComponent: function () {
        var map = Ext.create('GeoExt.component.Map', {
            anchor: '100% 100%'
        });
        this.items.push(map);
        this.callParent();
    },
});