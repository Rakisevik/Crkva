Ext.define('Crkva.view.main.navigation.search.SearchNavigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'searchnavigation',

    requires: [
        'Crkva.view.main.navigation.search.SearchNavigationController',
        'Crkva.view.main.navigation.search.SearchNavigationModel'
    ],

    controller: 'searchnavigation',
    viewModel: {
        type: 'searchnavigation'
    },

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'container',
            html: '<div style="text-align: center; font-size: 18px;">Претрага навигација</div>'
        }
    ],
});