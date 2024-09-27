Ext.define('Crkva.view.main.sidebar.search.SearchSidebar', {
    extend: 'Ext.panel.Panel',
    xtype: 'searchsidebar',

    requires: [
        'Crkva.view.main.sidebar.search.SearchSidebarModel',
        'Crkva.view.main.sidebar.search.SearchSidebarController',
    ],

    controller: 'searchsidebar',
    viewModel: {
        type: 'searchsidebar'
    },

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'container',
            html: '<div style="text-align: center; font-size: 18px;">Претрага сајдбар</div>'
        }
    ],
});
