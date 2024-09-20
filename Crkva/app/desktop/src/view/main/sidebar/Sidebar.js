Ext.define('Crkva.view.main.sidebar.Sidebar', {
    extend: 'Ext.panel.Panel',
    xtype: 'sidebar',

    requires: [
        'Crkva.view.main.sidebar.SidebarController',
        'Crkva.view.main.sidebar.SidebarModel'
    ],

    controller: 'sidebar',
    viewModel: {
        type: 'sidebar'
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