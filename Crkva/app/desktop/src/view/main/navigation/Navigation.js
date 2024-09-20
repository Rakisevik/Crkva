Ext.define('Crkva.view.main.navigation.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'navigation',

    requires: [
        'Crkva.view.main.navigation.NavigationController',
        'Crkva.view.main.navigation.NavigationModel'
    ],

    controller: 'navigation',
    viewModel: {
        type: 'navigation'
    },

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
    },

    width: 300,

    items: [
    ]
});