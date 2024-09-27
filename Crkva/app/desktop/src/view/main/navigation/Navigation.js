Ext.define('Crkva.view.main.navigation.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'navigation',

    requires: [
        'Crkva.view.main.navigation.NavigationController',
        'Crkva.view.main.navigation.NavigationModel',
        'Crkva.view.main.navigation.map.MapNavigation',
        'Crkva.view.main.navigation.search.SearchNavigation',
        'Crkva.view.main.navigation.map.MapNavigation',
        'Ext.layout.container.Card'
    ],

    controller: 'navigation',
    viewModel: {
        type: 'navigation'
    },

    layout: {
        type: 'card'
    },
    width: 300,

    items: [
        {
            xtype: 'searchnavigation',
            id: NavigationMode.Search,
        },
        {
            xtype: 'mapnavigation',
            id: NavigationMode.Map,
        }
    ]
});