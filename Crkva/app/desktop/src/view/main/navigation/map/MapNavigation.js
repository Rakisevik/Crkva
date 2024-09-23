Ext.define('Crkva.view.main.navigation.map.MapNavigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'mapnavigation',

    requires: [
        'Crkva.view.main.navigation.map.MapNavigationController',
        'Crkva.view.main.navigation.map.MapNavigationModel'
    ],

    controller: 'mapnavigation',
    viewModel: {
        type: 'mapnavigation'
    },

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'textfield',
            emptyText: 'Претражи',
            margin: 10,
            cls: 'custom-searchfield',
            triggers: {
                clear: {
                    cls: 'search-icon fa-search'
                }
            }
        }
    ]
});