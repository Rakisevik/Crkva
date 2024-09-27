Ext.define('Crkva.view.main.sidebar.map.MapSidebar', {
    extend: 'Ext.panel.Panel',
    xtype: 'mapsidebar',

    requires: [
        'Crkva.view.main.sidebar.map.MapSidebarModel',
        'Crkva.view.main.sidebar.map.MapSidebarController',
    ],

    controller: 'mapsidebar',
    viewModel: {
        type: 'mapsidebar'
    },

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'container',
            html: '<div style="text-align: center; font-size: 18px;">Мапа сајдбар</div>'
        }
    ],
});
