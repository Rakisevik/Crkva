Ext.define('Crkva.view.main.workspace.search.Search', {
    extend: 'Ext.panel.Panel',
    xtype: 'search',

    requires: [
        'Crkva.view.main.workspace.search.SearchModel',
        'Crkva.view.main.workspace.search.SearchController',
    ],

    controller: 'data',
    viewModel: {
        type: 'data'
    },

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'container',
            html: '<div style="text-align: center; font-size: 18px;">Претрага</div>'
        }
    ],
});
