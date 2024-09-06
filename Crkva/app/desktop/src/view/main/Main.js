Ext.define('Crkva.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.layout.container.Border',
        'Crkva.view.main.MainController',
        'Crkva.view.main.MainModel',
        'Crkva.view.main.header.HeaderView'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',
    items: [
        {
            region: 'north',
            xtype: 'headerview'
        }
    ]
});