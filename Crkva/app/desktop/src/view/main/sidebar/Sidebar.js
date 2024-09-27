Ext.define('Crkva.view.main.sidebar.Sidebar', {
    extend: 'Ext.panel.Panel',
    xtype: 'sidebar',

    requires: [
        'Crkva.view.main.sidebar.SidebarController',
        'Crkva.view.main.sidebar.SidebarModel',
        'Crkva.view.main.sidebar.data.DataSidebar',
        'Crkva.view.main.sidebar.map.MapSidebar',
        'Crkva.view.main.sidebar.search.SearchSidebar'
    ],

    controller: 'sidebar',
    viewModel: {
        type: 'sidebar'
    },

    layout: {
        type: 'card'
    },
    width: 300,

    items: [
        {
            xtype: 'searchsidebar',
            id: SidebarMode.Search,
        },
        {
            xtype: 'datasidebar',
            id: SidebarMode.Data
        },
        {
            xtype: 'mapsidebar',
            id: SidebarMode.Map,
        }
    ]
});